import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private token: string;

  constructor(public httpClient: HttpClient) { }

  createNewGame(id) {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`http://localhost:3000/hacks/${id}`, { headers: { authorization: this.token } })
  }

  getAllUsers() {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get('http://localhost:3000/users/info/all', { headers: { authorization: this.token } })
  }

  deleteUser(id: string | number) {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.delete(`http://localhost:3000/users/administration/${id}`, { headers: { authorization: this.token } })
  }

  deleteGame(id:string|number){
    this.token = localStorage.getItem('authToken')
    return this.httpClient.delete(`http://localhost:3000/games/${id}`, { headers: { authorization: this.token } })
  }

}
