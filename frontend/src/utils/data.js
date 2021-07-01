export const validatorData = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button ',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorSelector: '.popup__error',
  errorClass: 'popup__error_visible',
}

export const configApi = {
  url: 'http://localhost:3000',
  headers: {
    authorization: 'https://api.vasilev.students.nomoredomains.club',
    'Content-Type': 'application/json'
  }
}