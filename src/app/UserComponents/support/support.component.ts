import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { SupportService } from 'src/app/services/user/support.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})

export class SupportComponent {


  supportForm = new FormGroup({
    name: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  constructor(
    private supportService: SupportService
  ) { }

  submitReport() {

    const data = this.supportForm.value;

    this.supportService.sendSupoport(data)
      .pipe(
        finalize(() => {
          this.supportForm.reset();
        })
      )
      .subscribe(
        {
          next: (res: any) => {
            let data = res.data;
          },
          error: (err) => {
            let errorMessage = err.error.message;
          }
        }
      );

  }


}