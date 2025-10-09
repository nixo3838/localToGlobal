import { Component } from '@angular/core';

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


  
}
