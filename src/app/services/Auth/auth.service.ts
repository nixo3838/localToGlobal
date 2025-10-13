import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private roleSubject = new BehaviorSubject<string | null>(localStorage.getItem('userRole'));
  private authSubject = new BehaviorSubject<boolean>(!!localStorage.getItem('auth_token'));

  role$ = this.roleSubject.asObservable();
  isAuthenticated$ = this.authSubject.asObservable();

  private userRole: string | null = null; // Example: 'admin' or 'user'
  private isAuthenticated: boolean = false;
  apiUrl = environment.apiUrl1;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(token: any, role: string, username: string) {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('userRole', role);
    this.roleSubject.next(role);
    this.authSubject.next(true);
  }

  logout() {
    this.authSubject.next(false);
    this.roleSubject.next(null);

    ['userRole', 'auth_token', 'username'].forEach(key => localStorage.removeItem(key));
    this.router.navigate(['login']);
    return this.http.post(`${this.apiUrl}auth/logout`, {});
  }

  isLoggedIn() {
    return !!localStorage.getItem('auth_token');
  }

  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }

  isAdmin(): boolean {
    return (this.isLoggedIn() && this.getUserRole() === 'admin');
  }

  isUser(): boolean {
    return (this.isLoggedIn() && this.getUserRole() === 'user');
  }

  anyAccountLoggedIn(): boolean {
    return this.isLoggedIn() && !!this.getUserRole();
  }

}