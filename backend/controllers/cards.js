const Card = require('../models/card');
const NotFoundError = require('../errors/not-found-err');
const BadRequestError = require('../errors/bad-request-err');
const Forbidden = require('../errors/forbidden-err');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.status(200).send(cards.reverse()))
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  const id = req.user._id;
  Card.create({ name, link, owner: id })
    .then((card) => {
      res.status(201).send({ data: card });
    })
    .catch((err) => {
      if (err && err.name === 'ValidationError') {
        throw new BadRequestError(`Указаны некорректные данные при создании карточки: ${err.message}`);
      } else {
        next(err);
      }
    })
    .catch(next);
};

module.exports.deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError(`Карточка с указанным _id не найдена: ${req.params.cardId}`);
      }
      if (card.owner.toString() !== req.user._id) {
        throw new Forbidden('Доступ запрещен');
      }
      Card.findByIdAndRemove(req.params.cardId)
        .then((data) => res.status(200)
          .send(data));
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.kind === 'CastError') {
        next(new BadRequestError('Некорректная информация'));
      } else {
        next(err);
      }
    });
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError(`Карточка с указанным _id не найдена: ${req.params.cardId}`);
      }
      res.send({ data: card });
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.kind === 'CastError') {
        next(new BadRequestError('Некорректная информация'));
      } else {
        next(err);
      }
    });
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError(`Карточка с указанным _id не найдена: ${req.params.cardId}`);
      }
      res.send({ data: card });
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.kind === 'CastError') {
        next(new BadRequestError('Некорректная информация'));
      } else {
        next(err);
      }
    });
};
