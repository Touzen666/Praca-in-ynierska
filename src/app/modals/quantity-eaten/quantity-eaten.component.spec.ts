import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityEatenComponent } from './quantity-eaten.component';

describe('QuantityEatenComponent', () => {
  let component: QuantityEatenComponent;
  let fixture: ComponentFixture<QuantityEatenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityEatenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityEatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
