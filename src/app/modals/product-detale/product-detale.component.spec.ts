import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetaleComponent } from './product-detale.component';

describe('ProductDetaleComponent', () => {
  let component: ProductDetaleComponent;
  let fixture: ComponentFixture<ProductDetaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
