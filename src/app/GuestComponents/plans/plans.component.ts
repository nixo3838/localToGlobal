import { Component } from '@angular/core';
import { ToastManagerService } from 'src/app/services/Shared/toast-manager.service';
import { BuyPlansService } from 'src/app/services/user/buy-plans.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {

  plansList: any;

  constructor(
    private buyPlansService: BuyPlansService,
    private toastService: ToastManagerService,
  ) { }

  ngOnInit() {
    this.showPlans();
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


}
