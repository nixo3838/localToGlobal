import { TestBed } from '@angular/core/testing';

import { BuyPlansService } from './buy-plans.service';

describe('BuyPlansService', () => {
  let service: BuyPlansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyPlansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
