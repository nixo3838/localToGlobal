import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class GlobalHeaderInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('auth_token') || '';
    const authReq = request.clone({
      setHeaders: {
        'Authorization': 'Bearer ' + token
      }
    });

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const safeUrl = error.url ?? undefined;

    let customError = new HttpErrorResponse({
      error: {
        ...error.error,
        message: this.getCustomErrorMessage(error)
      },
      headers: error.headers,
      status: error.status,
      statusText: error.statusText,
      url: safeUrl,
    });

    return throwError(() => customError);
  }

  private getCustomErrorMessage(error: HttpErrorResponse): string {
    if (error.status === 400) return error.error?.message || 'Bad Request';
    if (error.status === 401 || error.status === 403) {
      this.authService.logout();
      return error.error?.message || 'Unauthorized! Please log in again.'
    }
    if (error.status === 500) return error.error?.message || 'Server error occurred. Please try again later.';
    if (error.status === 0) return error.error?.message || '❌ Network error or CORS issue.';
    return error.error?.message || 'Something went wrong!';
  }

}
