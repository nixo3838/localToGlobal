import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNgToastComponent } from './prime-ng-toast.component';

describe('PrimeNgToastComponent', () => {
  let component: PrimeNgToastComponent;
  let fixture: ComponentFixture<PrimeNgToastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeNgToastComponent]
    });
    fixture = TestBed.createComponent(PrimeNgToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
