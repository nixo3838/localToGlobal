import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastManagerService } from 'src/app/services/Shared/toast-manager.service';
import { DashboardService } from 'src/app/services/user/dashboard.service';
import Swal from 'sweetalert2';

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
  isSubDomainAvailable = false;

  createTunnelForm = new FormGroup({
    planId: new FormControl(null, Validators.required),
    subdomain: new FormControl(''),
    localhost: new FormControl('', Validators.required)
  });

  constructor(
    private dashboardService: DashboardService,
    private toastService: ToastManagerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createTunnelForm.get('planId')?.valueChanges.subscribe((planId: any) => {
      this.findPlanDetails(planId);
    });
  }

  searchSubDomain() {
    this.planDetails = null;

    const data = {
      subdomain: this.subDomainName
    };

    this.dashboardService.searchSubDomain(data).subscribe(
      (res: any) => {
        this.subDomainData = res;
        if (this.subDomainData.message == 'Subdomain already available') {
          this.isSubDomainAvailable = true;
        }
      },
      (err: any) => {
        const errorMessage = err.error.message;
        this.toastService.showToast('error', '', errorMessage, 5000);
      }
    );
  }

  findPlanDetails(planId: string) {
    this.planDetails = this.subDomainData.data.planNameList.find((item: any) => item._id == planId);

    if (this.planDetails?.used) {
      Swal.fire({
        title: 'Warning',
        text: 'this plan already in used.'.toUpperCase(),
        icon: 'warning',
        timer: 5000,
      });
    }
  }

  createTunnel() {
    const formData = this.createTunnelForm.value;
    const data = {
      planId: formData.planId,
      localhost: formData.localhost,
      subdomain: this.subDomainName
    };

    this.dashboardService.createTunnel(data).subscribe(
      (res: any) => {
        this.toastService.showToast('success', '', res.message, 5000);
      },
      (err: any) => {
        const errorMessage = err.error.message;
        this.toastService.showToast('error', '', errorMessage, 5000);
      }
    );
  }

  goToBuyPlanPage() {
    this.router.navigateByUrl('/user/buy-plans');
    this.createTunnelForm.reset();
  }


}