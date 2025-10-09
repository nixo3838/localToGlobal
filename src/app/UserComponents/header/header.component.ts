import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class UserHeaderComponent {

  routes: any = [
    {
      path: 'dashboard',
      name: 'Dashboard',
      icon: ''
    },
    {
      path: 'buy-plans',
      name: 'Buy Plans & Report',
      icon: ''
    },
    {
      path: 'tunnel-and-subscription',
      name: 'Tunnel & Subscription',
      icon: ''
    },
    {
      path: 'support',
      name: 'Support',
      icon: ''
    },
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  logout() {
    this.authService.logout()
      .subscribe(
        {
          next: (res: any) => {
            Swal.fire({
              title: 'Sucess',
              text: res.message.toUpperCase() || 'Logged Out',
              icon: 'success',
              timer: 5000,
            });
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
