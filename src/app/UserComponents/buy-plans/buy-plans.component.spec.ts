import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPlansComponent } from './buy-plans.component';

describe('BuyPlansComponent', () => {
  let component: BuyPlansComponent;
  let fixture: ComponentFixture<BuyPlansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyPlansComponent]
    });
    fixture = TestBed.createComponent(BuyPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
