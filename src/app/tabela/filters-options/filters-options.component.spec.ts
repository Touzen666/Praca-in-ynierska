import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersOptionsComponent } from './filters-options.component';

describe('FiltersOptionsComponent', () => {
  let component: FiltersOptionsComponent;
  let fixture: ComponentFixture<FiltersOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
