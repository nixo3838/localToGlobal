import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { LoginService } from 'src/app/services/Auth/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {



  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) { }

  verifyLogin() {
    let loginData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.loginService.verifyLogin(loginData)
      .pipe(
        finalize(() => {
          this.loginForm.reset();
        })
      )
      .subscribe(
        {
          next: (res: any) => {
            let data = res.data;
            this.authService.login(data.token, data.role, data.name);
            Swal.fire({
              title: 'Sucess',
              text: res.message.toUpperCase() || 'User Logged In',
              icon: 'success',
              timer: 5000,
            });
            this.router.navigate([res.data.role + '/dashboard']);
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
