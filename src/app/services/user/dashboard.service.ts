import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiUrl = environment.apiUrl3;

  constructor(
    private http: HttpClient
  ) { }

  searchSubDomain(data: any) {
    return this.http.post(`${this.apiUrl}search_subdomain`, data);
  }

}
