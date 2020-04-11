import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdvSearchService {

  private token:string;

  constructor(public httpClient:HttpClient) { }

  searchByPath(path:string ,search:string) {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`http://localhost:3000/${path}/${search}`,{headers: {Authorization: this.token}})
  }
  getMyInfo(){
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`http://localhost:3000/users/info`, {headers: {Authorization: this.token}})
  }



}
