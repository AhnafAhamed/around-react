class Api {
  constructor(params) {
    this.baseUrl = params.baseUrl;
    this.headers = params.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Error");
  }

  renderUserInfo() {
    return fetch(this.baseUrl + '/users/me', {
      headers: this.headers,
      method: "GET",
    }).then((res) => this._checkResponse(res));
  }

  renderCards() {
    return fetch(this.baseUrl + '/cards', {
      headers: this.headers,
      method: "GET",
    }).then((res) => this._checkResponse(res));
  }
}


const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-13",
  headers: {
    authorization: "4bb4f649-ce49-4e5f-81c2-ac119aac9e7d",
    "Content-Type": "application/json",
  },
});

export default api; 