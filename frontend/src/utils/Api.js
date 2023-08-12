class Api {
  constructor(configApi) {
    this._url = configApi.url;    
    this._headers = configApi.headers;
    this._credentials = configApi.credentials;
  }

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  };

  _request = (endpoint, options) => {
    return fetch(`${this._url}${endpoint}`, options).then(this._handleResponse);
  };

  getUserCards() {
    return this._request(`/cards`, {
      method: "GET",
      headers: this._headers,
      credentials: this._credentials,
    });
  }

  getCurrentUser() {
    return this._request(`/users/me`, {
      method: "GET",
      headers: this._headers,
      credentials: this._credentials,
    });
  }

  addCardsOut(item) {
    return this._request(`/cards`, {
      method: "POST",
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify(item),
    });
  }

  deleteCard(cardId) {
    return this._request(`/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
      credentials: this._credentials,
    });
  }

  changeUserInfo({ name, about }) {
    return this._request(`/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: this._credentials,

      body: JSON.stringify({
        name: name,
        about: about,
      }),
    });
  }

  changeUserAvatar({ avatar }) {
    return this._request(`/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({ avatar: avatar }),
    });
  }

  setCardLike(cardId) {
    return this._request(`/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
      credentials: this._credentials,
    });
  }

  deleteCardLike(cardId) {
    return this._request(`/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
      credentials: this._credentials,
    });
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return this.setCardLike(id);
    } else {
      return this.deleteCardLike(id);
    }
  }
}

const api = new Api({ 
  // url: "https://nomoreparties.co/v1/cohort-62",
  // url: "http://localhost:3002",
  url: "https://api.jul-mesto.nomoreparties.co",
  headers: {
    "content-type": "application/json",
     //authorization: "13bee0f6-be28-45c8-b317-73da0bb635bc",
      },
  credentials: "include",    
});

export default api;
