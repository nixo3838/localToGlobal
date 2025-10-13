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
import { ProfileComponent } from './UserComponents/profile/profile.component';
import { ForgotPasswordComponent } from './GuestComponents/forgot-password/forgot-password.component';
import { ResendActivationLinkComponent } from './GuestComponents/resend-activation-link/resend-activation-link.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        title: 'Login',
      },
      {
        path: 'signup',
        component: SignupComponent,
        title: ' Create Account ',
      },
      {
        path: 'forget-password',
        component: ForgotPasswordComponent,
        title: 'Forget Password',
      },
      {
        path: 'resend-activation-link',
        component: ResendActivationLinkComponent,
        title: 'Resend Activation Link',
      },
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
  },
  {
    path: 'plans',
    component: PlansComponent,
    title: 'Plans',
  },
  {
    path: 'user',
    title: 'User',
    children: [
      {
        path: 'buy-plans',
        component: BuyPlansComponent,
        title: 'Buy Plans',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard',
      },
      {
        path: 'support',
        component: SupportComponent,
        title: 'Support',
      },
      {
        path: 'tunnel-and-subscription',
        component: TunnelAndSubscriptionComponent,
        title: 'Tunnel And Subscription',
      },
      {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile',
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
