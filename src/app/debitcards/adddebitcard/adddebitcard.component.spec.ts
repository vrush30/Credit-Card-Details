import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddebitcardComponent } from './adddebitcard.component';

describe('AdddebitcardComponent', () => {
  let component: AdddebitcardComponent;
  let fixture: ComponentFixture<AdddebitcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdddebitcardComponent]
    });
    fixture = TestBed.createComponent(AdddebitcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
