import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCreditCardComponent } from './view-credit-card.component';

describe('ViewCreditCardComponent', () => {
  let component: ViewCreditCardComponent;
  let fixture: ComponentFixture<ViewCreditCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCreditCardComponent]
    });
    fixture = TestBed.createComponent(ViewCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
