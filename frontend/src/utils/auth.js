import { METHOD } from './constants.js'


class Auth {
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
  
  register({password, email}){
    return fetch(`${this.url}/signup`, {
      method: METHOD.POST,
      headers: this.headers,
      body: JSON.stringify({password, email})
    })
    .then(this._handleResponse)
  };

  authorize({password, email}){
    return fetch(`${this.url}/signin`, {
      method: METHOD.POST,
      headers: this.headers,
      body: JSON.stringify({password, email})
    })
    .then(this._handleResponse)
    .then((data) => {
      if (data.token){
        localStorage.setItem('token', data.token);      
      }
      return data;
    })
  };

  checkToken(){
    return fetch(`${this.url}/users/me`, {
      method: METHOD.GET,
      headers: {
        ...this.headers,
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(this._handleResponse)
    .then((data) => {
      return data;
  })
  }
}

const auth = new Auth({
  url: 'http://localhost:4000',
  headers: {
    authorization: '56ef87ac-ca8d-4cfa-bbaf-aacafdd87bde',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }, 
})


export default auth

