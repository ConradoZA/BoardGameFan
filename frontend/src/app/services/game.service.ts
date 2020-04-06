import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(public httpClient:HttpClient) { }

  searchGame(search:string){
    return this.httpClient.get('http://localhost:3000/search/game=' + search)
  }
  searchLatest(){
    return this.httpClient.get('http://localhost:3000/search/latest')
  }
  getGameById(id:string){
    return this.httpClient.get('http://localhost:3000/search/' + id)
  }
}
