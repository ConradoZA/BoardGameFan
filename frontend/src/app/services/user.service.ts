import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: object = {};
  private token:string;

  constructor(public httpClient: HttpClient) { }

  register(user: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users/register', user);
  }
  login(user: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users/login', user);
  }
  setUser(user: object): void {
    this.user = user;
  }
  getUser(): object {
    return this.user;
  }
  getUserInfo(): Observable<any> {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get('http://localhost:3000/users/info', {
      headers: {
        authorization: this.token
      }
    })
  }
  newGameInCollection(gameId: string): Observable<any> {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.post('http://localhost:3000/users/collection', { GameId: gameId, comment: "", rating: "" }, {
      headers: {
        authorization: this.token
      },
    })
  }
  updateGameCollection(comment: string, rating: number | string, id:string|number) {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.put('http://localhost:3000/users/collection', { comment: comment, rating: rating, GameId: id }, {
      headers: {
        authorization: this.token
      },
    })
  }
  deleteGameCollection(id:string|number) {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.delete(`http://localhost:3000/users/collection/${id}`, {
      headers: {
        authorization: this.token
      },
    })
  }
  updateInfo(object:object){
    this.token = localStorage.getItem('authToken')
    return this.httpClient.put('http://localhost:3000/users/info',object,{
      headers: {
        authorization: this.token
      },
    })
  }
}
