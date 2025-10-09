import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  verifyLogin(data: any) {
    return this.http.post(`${this.apiUrl}login`, data);
  }

}