import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './GuestComponents/login/login.component';
import { HomeComponent } from './GuestComponents/home/home.component';
import { ContactComponent } from './GuestComponents/contact/contact.component';
import { PlansComponent } from './GuestComponents/plans/plans.component';
import { SignupComponent } from './GuestComponents/signup/signup.component';
import { BuyPlansComponent } from './UserComponents/buy-plans/buy-plans.component';
import { DashboardComponent } from './UserComponents/dashboard/dashboard.component';
import { SupportComponent } from './UserComponents/support/support.component';
import { TunnelAndSubscriptionComponent } from './UserComponents/tunnel-and-subscription/tunnel-and-subscription.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: '',
  },
  {
    path: 'plans',
    component: PlansComponent,
    title: '',
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: '',
  },
  {
    path: 'user',
    title: '',
    children: [
      {
        path: 'buy-plans',
        component: BuyPlansComponent,
        title: '',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: '',
      },
      {
        path: 'support',
        component: SupportComponent,
        title: '',
      },
      {
        path: 'tunnel-and-subscription',
        component: TunnelAndSubscriptionComponent,
        title: '',
      },
    ]
  },



  // Wildcard route - must be LAST
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
