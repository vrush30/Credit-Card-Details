import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedebitcardComponent } from './deletedebitcard.component';

describe('DeletedebitcardComponent', () => {
  let component: DeletedebitcardComponent;
  let fixture: ComponentFixture<DeletedebitcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletedebitcardComponent]
    });
    fixture = TestBed.createComponent(DeletedebitcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
