import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  sendSupoport(data: any) {
    return this.http.post(`${this.apiUrl}get_support`, data);
  }

}