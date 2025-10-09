import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserAuthGuard } from './user-auth.guard';
import { AuthService } from '../Authentication/auth.service';

describe('UserAuthGuard', () => {
  let guard: UserAuthGuard;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let route: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;

  beforeEach(() => {
    // Create spies for AuthService and Router
    authServiceSpy = jasmine.createSpyObj('AuthService', ['isUser']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        UserAuthGuard,
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy },
      ]
    });

    guard = TestBed.inject(UserAuthGuard);

    // Create dummy route and state
    route = {} as ActivatedRouteSnapshot;
    state = { url: '/dashboard' } as RouterStateSnapshot;
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if user is authenticated', () => {
    authServiceSpy.isUser.and.returnValue(true);

    const result = guard.canActivate(route, state);

    expect(result).toBeTrue();
    expect(authServiceSpy.isUser).toHaveBeenCalled();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });

  it('should return false and navigate to login if user is not authenticated', () => {
    authServiceSpy.isUser.and.returnValue(false);

    const result = guard.canActivate(route, state);

    expect(result).toBeFalse();
    expect(authServiceSpy.isUser).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['login']);
  });
});
