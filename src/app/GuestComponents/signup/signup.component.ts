import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { LoginService } from 'src/app/services/Auth/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {


  constructor(
    private signUpService: LoginService,
    private authService: AuthService,
    private router: Router
  ) { }

  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', Validators.required),
  });

  signUp() {
    const data = this.signupForm.value;

    this.signUpService.createAccount(data)
      .pipe(
        finalize(() => {
          this.signupForm.reset();
        })
      )
      .subscribe(
        {
          next: (res: any) => {
            let data = res.data;

            Swal.fire({
              title: 'Sucess',
              text: res.message.toUpperCase() || 'User Account Created Successfully!',
              icon: 'success',
              timer: 5000,
            });

            this.router.navigate(['/login']);
          },
          error: (err) => {
            let errorMessage = err.error.message;
            Swal.fire({
              title: 'Error',
              text: errorMessage || 'Internal Server Error',
              icon: 'error',
              timer: 5000
            });
          }
        }
      );

  }

}