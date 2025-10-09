import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GlobalHeaderInterceptor } from './services/Auth/global-header.interceptor';
import { AppComponent } from './app.component';
import { DashboardComponent } from './UserComponents/dashboard/dashboard.component';
import { UserHeaderComponent } from './UserComponents/header/header.component';
import { BuyPlansComponent } from './UserComponents/buy-plans/buy-plans.component';
import { SupportComponent } from './UserComponents/support/support.component';
import { TunnelAndSubscriptionComponent } from './UserComponents/tunnel-and-subscription/tunnel-and-subscription.component';
import { HomeComponent } from './GuestComponents/home/home.component';
import { SignupComponent } from './GuestComponents/signup/signup.component';
import { ContactComponent } from './GuestComponents/contact/contact.component';
import { PlansComponent } from './GuestComponents/plans/plans.component';
import { LoginComponent } from './GuestComponents/login/login.component';
import { HeaderComponent } from './GuestComponents/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    BuyPlansComponent,
    SupportComponent,
    TunnelAndSubscriptionComponent,
    HomeComponent,
    SignupComponent,
    ContactComponent,
    PlansComponent,
    UserHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
