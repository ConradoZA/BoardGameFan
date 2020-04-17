import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdvSearchService {

  private token: string;

  constructor(public httpClient: HttpClient) { }

  searchByPath(path: string, search: string) {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`http://localhost:3000/${path}/${search}`, { headers: { authorization: this.token } })
  }
  getMyInfo() {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`http://localhost:3000/users/info`, { headers: { authorization: this.token } })
  }
  getMechanics() {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`http://localhost:3000/mechanics`, { headers: { authorization: this.token } })
  }
  getCategories() {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`http://localhost:3000/categories`, { headers: { authorization: this.token } })
  }
  getDesigners() {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`http://localhost:3000/authors`, { headers: { authorization: this.token } })
  }
  getArtists() {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`http://localhost:3000/artists`, { headers: { authorization: this.token } })
  }

}
