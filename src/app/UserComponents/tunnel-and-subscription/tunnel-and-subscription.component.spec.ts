import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunnelAndSubscriptionComponent } from './tunnel-and-subscription.component';

describe('TunnelAndSubscriptionComponent', () => {
  let component: TunnelAndSubscriptionComponent;
  let fixture: ComponentFixture<TunnelAndSubscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TunnelAndSubscriptionComponent]
    });
    fixture = TestBed.createComponent(TunnelAndSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
