import { METHOD } from './constants.js'

class Api {
  constructor (config) {
    this.url = config.url
    this.headers = config.headers
  }


  _handleResponse(res) {
    if (res.ok) {
      return res.json()
    }
  return Promise.reject(new Error(`Произошла ошибка со статус кодом ${res.status}`))
  }
    
  getCards() {
    return fetch(`${this.url}/cards`, {
      headers: {
        ...this.headers,
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(this._handleResponse)  
  }


  createCard({name, link}) {
    return fetch(`${this.url}/cards`, {
      method: METHOD.POST,
      headers: {
        ...this.headers,
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ name, link })
    })
    .then(this._handleResponse)
  }

  deleteCard(id) {
    return fetch(`${this.url}/cards/${id}`, {
      method: METHOD.DELETE,
      headers: {
        ...this.headers,
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
    })
    .then(this._handleResponse)
    }

 changeLikeCardStatus(cardId, likeStatus) {
  if (likeStatus) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: METHOD.PUT,
      headers: {
        ...this.headers,
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
    }).then(this._handleResponse)
  } else {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: METHOD.DELETE,
      headers: {
        ...this.headers,
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(this._handleResponse)
    }
  }

  getMyInfo() {
    return fetch(`${this.url}/users/me`, {
      headers: {
        ...this.headers,
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(this._handleResponse)
  }

  updateMyInfo({name, about}) {
    return fetch(`${this.url}/users/me`, {
      method: METHOD.PATCH, 
      headers: {
        ...this.headers,
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ name, about })
    })
    .then(this._handleResponse)
  }

  updateMyAvatar(avatar) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: METHOD.PATCH, 
      headers: {
        ...this.headers,
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ avatar })
    })
    .then(this._handleResponse)
  }
}


const api = new Api ({
  url: 'https://api.vasilev.students.nomoredomains.club',
  headers: {
    authorization: '56ef87ac-ca8d-4cfa-bbaf-aacafdd87bde',
    'Content-Type': 'application/json'
  }
})

export default api


