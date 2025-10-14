import { Component } from '@angular/core';
import { ToastManagerService } from 'src/app/services/Shared/toast-manager.service';
import { TunnelAndSubscriptionService } from 'src/app/services/user/tunnel-and-subscription.service';

@Component({
  selector: 'app-tunnel-and-subscription',
  templateUrl: './tunnel-and-subscription.component.html',
  styleUrls: ['./tunnel-and-subscription.component.scss']
})
export class TunnelAndSubscriptionComponent {

  tunnelList: any[] = [];
  subscriptionList: any[] = [];

  constructor(
    private tunnelAndSubscriptionService: TunnelAndSubscriptionService,
    private toastManager: ToastManagerService
  ) { }

  ngOnInit() {
    this.getTunnelList();
    this.getSubScriptionList();
  }

  getTunnelList() {
    this.tunnelAndSubscriptionService.getTunnelList().subscribe(
      (res: any) => {
        this.tunnelList = res.data;
      },
      (err: any) => {
        let errorMessage = err.message;
        this.toastManager.showToast('error', '', errorMessage, 5000);
      }
    )
  }

  getSubScriptionList() {
    this.tunnelAndSubscriptionService.getSubScriptionList().subscribe(
      (res: any) => {
        this.subscriptionList = res.data;
      },
      (err: any) => {
        let errorMessage = err.message;
        this.toastManager.showToast('error', '', errorMessage, 5000);
      }
    )
  }


}
