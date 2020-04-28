import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  API_URL = environment.API_URL;
  private token: string;

  constructor(public httpClient: HttpClient) { }

  createNewGame(id) {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`${this.API_URL}/hacks/${id}`, { headers: { authorization: this.token } })
  }

  getAllUsers() {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(this.API_URL+'/users/info/all', { headers: { authorization: this.token } })
  }

  deleteUser(id: string | number) {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.delete(`${this.API_URL}/users/administration/${id}`, { headers: { authorization: this.token } })
  }

  deleteGame(id: string | number) {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.delete(`${this.API_URL}/games/${id}`, { headers: { authorization: this.token } })
  }

  promoteUser(id: string | number) {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.put(`${this.API_URL}/users/info/${id}`, { headers: { authorization: this.token } })
  }

  degradeUser(id: string | number) {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.put(`${this.API_URL}/users/info/downgrade/${id}`, { headers: { authorization: this.token } })
  }

  confirmUser(email: string, user: string) {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.post(`${this.API_URL}/users/send`, { email, username: user }, { headers: { authorization: this.token } })
  }

  changePassword(email: string, user: string, id: string | number) {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.post(`${this.API_URL}/users/change`, { email, username: user, id }, { headers: { authorization: this.token } })
  }

  hashPassword(password: string, id: string) {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.post(`${this.API_URL}/back/confirm`, { password, id }, { headers: { authorization: this.token } })
  }
  forgotPassword(user: string) {
    return this.httpClient.post(`${this.API_URL}/back/forgot`, { username: user })
  }
  newPassword(token: string, password: string) {
    return this.httpClient.post(`${this.API_URL}/back/remember`, { token, password })
  }
}
