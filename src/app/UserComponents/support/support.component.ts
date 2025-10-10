import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { ToastManagerService } from 'src/app/services/Shared/toast-manager.service';
import { SupportService } from 'src/app/services/user/support.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})

export class SupportComponent {


  supportForm = new FormGroup({
    fullname: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  constructor(
    private supportService: SupportService,
    private toastService: ToastManagerService
  ) { }

  submitReport() {

    const data = this.supportForm.value;

    this.supportService.sendSupoport(data)
      .pipe(
        finalize(() => {
          // this.supportForm.reset();
        })
      )
      .subscribe(
        {
          next: (res: any) => {
            // let data = res.data;
            this.toastService.showToast('success', '', res.message, 5000);
          },
          error: (err) => {
            let errorMessage = err.error.message;
            this.toastService.showToast('error', '', errorMessage, 5000);
          }
        }
      );

  }


}