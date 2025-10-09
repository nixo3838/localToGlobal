import { TestBed } from '@angular/core/testing';

import { GlobalHeaderInterceptor } from './global-header.interceptor';

describe('GlobalHeaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GlobalHeaderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GlobalHeaderInterceptor = TestBed.inject(GlobalHeaderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
