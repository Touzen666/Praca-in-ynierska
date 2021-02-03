import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreatorComponent } from './modal-creator.component';

describe('ModalCreatorComponent', () => {
  let component: ModalCreatorComponent;
  let fixture: ComponentFixture<ModalCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
