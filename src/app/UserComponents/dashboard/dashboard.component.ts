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
  subDomainData: any;
  domainAddress = '.localtoglobal.in';
  planDetails: any;



  constructor(
    private dashboardService: DashboardService,
    private toastService: ToastManagerService,
  ) { }

  searchSubDomain() {
    this.planDetails = null;
    
    const data = {
      subdomain: this.subDomainName
    };

    this.dashboardService.searchSubDomain(data).subscribe(
      (res: any) => {
        this.subDomainData = res;
      },
      (err: any) => {
        const errorMessage = err.error.message;
        this.toastService.showToast('error', '', errorMessage, 5000);
      }
    );
  }

  planDetailFind(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    this.planDetails = this.subDomainData.data.planNameList.find((item: any) => item._id == selectedValue);
  }



}