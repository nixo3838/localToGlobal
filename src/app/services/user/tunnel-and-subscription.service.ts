import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TunnelAndSubscriptionService {

  apiUrl = environment.apiUrl3;
  apiUrl4 = environment.apiUrl4;

  constructor(
    private http: HttpClient
  ) { }

  getTunnelList() {
    return this.http.get(`${this.apiUrl}get_tunnel_list`);
  }

  getSubScriptionList() {
    return this.http.get(`${this.apiUrl4}get_subscription_list`);
  }


}