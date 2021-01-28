import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodowkaComponent } from './lodowka.component';

describe('LodowkaComponent', () => {
  let component: LodowkaComponent;
  let fixture: ComponentFixture<LodowkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodowkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodowkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
