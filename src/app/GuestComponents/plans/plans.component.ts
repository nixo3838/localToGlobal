import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { ToastManagerService } from 'src/app/services/Shared/toast-manager.service';
import { BuyPlansService } from 'src/app/services/user/buy-plans.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {

  plansList: any;
  isUserLoggedIn = false;

  constructor(
    private buyPlansService: BuyPlansService,
    private toastService: ToastManagerService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.showPlans();
    this.isUserLoggedIn = this.authService.isUser();
  }

  showPlans() {
    this.buyPlansService.showPlans().subscribe(
      (res: any) => {
        this.plansList = res.data;
      },
      (err: any) => {
        const errorMessage = err.error.message;
        this.toastService.showToast('error', '', errorMessage, 5000);
      }
    );
  }

  clickedOnBuyPlans(planId: string) {
    if (this.isUserLoggedIn) {
      this.buyPlan(planId);
    }
    if (!this.isUserLoggedIn) {
      this.router.navigateByUrl('/login')
    }
  }

  buyPlan(planId: string) {
    this.buyPlansService.planPayment(planId).subscribe(
      (res: any) => {
        this.paymentCallBackPlan(res?.planId, res?.transactionId);
        this.toastService.showToast('success', '', res.message, 5000);
      },
      (err: any) => {
        const errorMessage = err.error.message;
        this.toastService.showToast('error', '', errorMessage, 5000);
      }
    );
  }

  paymentCallBackPlan(planId: string, txnId: string) {

    const data = {
      planId: planId,
      transactionId: txnId
    };

    this.buyPlansService.paymentCallBackPlan(data).subscribe(
      (res: any) => {
        this.toastService.showToast('success', '', res.message, 5000);
      },
      (err: any) => {
        const errorMessage = err.error.message;
        this.toastService.showToast('error', '', errorMessage, 5000);
      }
    );
  }

}
