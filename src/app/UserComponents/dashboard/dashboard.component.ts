import { Component } from '@angular/core';
import { ToastManagerService } from 'src/app/services/Shared/toast-manager.service';
import { DashboardService } from 'src/app/services/user/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  subDomainName: string = '';
  subDomainList: any;



  constructor(
    private dashboardService: DashboardService,
    private toastService: ToastManagerService,
  ) { }

  searchSubDomain() {
    const data = {
      subdomain: this.subDomainName
    };

    this.dashboardService.searchSubDomain(data).subscribe(
      (res: any) => {
        this.subDomainList = res.data;
      },
      (err: any) => {
        const errorMessage = err.error.message;
        this.toastService.showToast('error', '', errorMessage, 5000);
      }
    );
  }




}