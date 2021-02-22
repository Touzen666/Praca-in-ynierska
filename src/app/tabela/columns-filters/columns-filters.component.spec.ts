import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnsFiltersComponent } from './columns-filters.component';

describe('ColumnsFiltersComponent', () => {
  let component: ColumnsFiltersComponent;
  let fixture: ComponentFixture<ColumnsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnsFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
