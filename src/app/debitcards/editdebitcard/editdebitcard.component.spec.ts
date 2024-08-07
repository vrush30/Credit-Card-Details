import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdebitcardComponent } from './editdebitcard.component';

describe('EditdebitcardComponent', () => {
  let component: EditdebitcardComponent;
  let fixture: ComponentFixture<EditdebitcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditdebitcardComponent]
    });
    fixture = TestBed.createComponent(EditdebitcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
