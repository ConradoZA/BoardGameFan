import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdvSearchService {
  API_URL = environment.API_URL;
  private token: string;

  constructor(public httpClient: HttpClient) { }

  searchByPath(path: string, search: string) {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`${this.API_URL}/${path}/${search}`, { headers: { authorization: this.token } })
  }
  getMyInfo() {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`${this.API_URL}/users/info`, { headers: { authorization: this.token } })
  }
  getMechanics() {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`${this.API_URL}/mechanics`, { headers: { authorization: this.token } })
  }
  getCategories() {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`${this.API_URL}/categories`, { headers: { authorization: this.token } })
  }
  getDesigners() {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`${this.API_URL}/authors`, { headers: { authorization: this.token } })
  }
  getArtists() {
    this.token = localStorage.getItem('authToken')
    return this.httpClient.get(`${this.API_URL}/artists`, { headers: { authorization: this.token } })
  }

}
