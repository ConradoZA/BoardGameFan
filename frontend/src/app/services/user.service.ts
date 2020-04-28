import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject<object>({});
  user$ = this.user.asObservable();
  API_URL = environment.API_URL;
  private token:string;

  constructor(public httpClient: HttpClient) { }

  register(user: object): Observable<any> {
    return this.httpClient.post(this.API_URL+'/users/register', user);
  }
  login(user: object): Observable<any> {
    return this.httpClient.post(this.API_URL+'/users/login', user);
  }
  setUser(user: object): void {
    this.user.next(user);
  }
  getUserInfo(): Observable<any> {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(this.API_URL+'/users/info', {
      headers: {
        authorization: this.token
      }
    })
  }
getGameCollection(userId:string){
  this.token = localStorage.getItem('authToken')
  return this.httpClient.get(this.API_URL+'/users/collection', {
    headers: {
      authorization: this.token
    }
  })
}
  newGameInCollection(gameId: string): Observable<any> {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.post(this.API_URL+'/users/collection', { GameId: gameId, comment: "", rating: "" }, {
      headers: {
        authorization: this.token
      },
    })
  }
  updateGameCollection(comment: string, rating: number | string, id:string|number) {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.put(this.API_URL+'/users/collection', { comment: comment, rating: rating, GameId: id }, {
      headers: {
        authorization: this.token
      },
    })
  }
  deleteGameCollection(id:string|number) {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.delete(`${this.API_URL}/users/collection/${id}`, {
      headers: {
        authorization: this.token
      },
    })
  }
  updateInfo(object:object){
    this.token = localStorage.getItem('authToken')
    return this.httpClient.put(this.API_URL+'/users/info',object,{
      headers: {
        authorization: this.token
      },
    })
  }
  uploadImage(fd:FormData){
    this.token = localStorage.getItem('authToken')
    return this.httpClient.post(this.API_URL+'/back/upload',fd,{
      headers: {
        authorization: this.token
      }, reportProgress:true, observe:'events'
    })
  }
}
