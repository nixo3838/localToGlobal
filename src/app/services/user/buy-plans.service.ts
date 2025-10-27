import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuyPlansService {

  apiUrl4 = environment.apiUrl4;
  apiUrl5 = environment.apiUrl5;

  constructor(
    private http: HttpClient
  ) { }

  getTransactionHistory() {
    return this.http.get(`${this.apiUrl5}get_transaction_history`);
  }

  showPlans() {
    return this.http.get(`${this.apiUrl4}show_plans`);
  }

  planPayment(id: string) {
    return this.http.post(`${this.apiUrl5}payment-plan/${id}`, {});
  }

  paymentCallBackPlan(data: any) {
    return this.http.post(`${this.apiUrl5}payment_callback_plan`, data);
  }

}