import { Component } from '@angular/core';
import { AuthService } from './services/Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'localToGlobal';


  constructor(
    private authService: AuthService
  ) { }

  isUser(): boolean {
    return this.authService.isUser();
  }

  isGuest(): boolean {
    return !this.authService.anyAccountLoggedIn();
  }

}