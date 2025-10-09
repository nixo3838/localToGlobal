import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendActivationLinkComponent } from './resend-activation-link.component';

describe('ResendActivationLinkComponent', () => {
  let component: ResendActivationLinkComponent;
  let fixture: ComponentFixture<ResendActivationLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResendActivationLinkComponent]
    });
    fixture = TestBed.createComponent(ResendActivationLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
