import { Component } from '@angular/core';
import { AuthService } from './services/Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'localToGlobal';
  isLoading = true;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  isUser(): boolean {
    return this.authService.isUser();
  }

  isGuest(): boolean {
    return !this.authService.anyAccountLoggedIn();
  }

}