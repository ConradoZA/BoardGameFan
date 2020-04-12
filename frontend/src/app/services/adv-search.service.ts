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
    return this.httpClient.get(`http://localhost:3000/${path}/${search}`, { headers: { Authorization: this.token } })
  }
  getMyInfo() {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`http://localhost:3000/users/info`, { headers: { Authorization: this.token } })
  }
  getMechanics() {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`http://localhost:3000/mechanics`, { headers: { Authorization: this.token } })
  }
  getCategories() {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`http://localhost:3000/categories`, { headers: { Authorization: this.token } })
  }
  getDesigners() {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`http://localhost:3000/authors`, { headers: { Authorization: this.token } })
  }
  getArtists() {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`http://localhost:3000/artists`, { headers: { Authorization: this.token } })
  }

}
