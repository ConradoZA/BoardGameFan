import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdvSearchService {

  private token:string;

  constructor(public httpClient:HttpClient, public userService:UserService) { }

  searchAuthor(search:string) {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get('http://localhost:3000/authors/' + search,{headers: {Authorization: this.token}})
  }
  



}
