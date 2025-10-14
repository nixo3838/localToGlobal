import { TestBed } from '@angular/core/testing';

import { TunnelAndSubscriptionService } from './tunnel-and-subscription.service';

describe('TunnelAndSubscriptionService', () => {
  let service: TunnelAndSubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TunnelAndSubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
