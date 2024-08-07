import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdebitcardComponent } from './viewdebitcard.component';

describe('ViewdebitcardComponent', () => {
  let component: ViewdebitcardComponent;
  let fixture: ComponentFixture<ViewdebitcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewdebitcardComponent]
    });
    fixture = TestBed.createComponent(ViewdebitcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
