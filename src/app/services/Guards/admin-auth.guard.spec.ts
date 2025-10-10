import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AdminAuthGuard } from './admin-auth.guard';
import { AuthService } from '../Auth/auth.service';

describe('AdminAuthGuard', () => {
  let guard: AdminAuthGuard;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    // Create spies
    authServiceSpy = jasmine.createSpyObj('AuthService', ['isAdmin']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AdminAuthGuard,
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });

    guard = TestBed.inject(AdminAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if user is admin', () => {
    authServiceSpy.isAdmin.and.returnValue(true);

    const result = guard.canActivate();

    expect(result).toBeTrue();
    expect(authServiceSpy.isAdmin).toHaveBeenCalled();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });

  it('should return false and navigate if user is not admin', () => {
    authServiceSpy.isAdmin.and.returnValue(false);

    const result = guard.canActivate();

    expect(result).toBeFalse();
    expect(authServiceSpy.isAdmin).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/unauthorized']);
  });
});