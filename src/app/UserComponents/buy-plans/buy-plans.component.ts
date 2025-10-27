import { Component } from '@angular/core';
import { ToastManagerService } from 'src/app/services/Shared/toast-manager.service';
import { BuyPlansService } from 'src/app/services/user/buy-plans.service';

@Component({
  selector: 'app-buy-plans',
  templateUrl: './buy-plans.component.html',
  styleUrls: ['./buy-plans.component.scss']
})
export class BuyPlansComponent {


  transactionHistory: any;

  constructor(
    private buyPlansService: BuyPlansService,
    private toastService: ToastManagerService,
  ) { }

  ngOnInit() {
    this.getTransactionHistory();
  }

  getTransactionHistory() {
    this.buyPlansService.getTransactionHistory().subscribe(
      (res: any) => {
        this.transactionHistory = res.data;
      },
      (err: any) => {
        const errorMessage = err.error.message;
        this.toastService.showToast('error', '', errorMessage, 5000);
      }
    );
  }

}