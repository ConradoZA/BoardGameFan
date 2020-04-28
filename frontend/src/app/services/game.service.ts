import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  API_URL = environment.API_URL;
  constructor(public httpClient:HttpClient) { }

  searchGame(search:string){
    return this.httpClient.get(this.API_URL+'/search/game=' + search)
  }
  searchLatest(){
    return this.httpClient.get(this.API_URL+'/search/latest')
  }
  getGameById(id:string){
    return this.httpClient.get(this.API_URL+'/search/' + id)
  }
  getAllGames(){
    return this.httpClient.get(this.API_URL+'/search/all')
  }
}
