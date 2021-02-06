import { TestBed } from '@angular/core/testing';

import { ModalCreatorService } from './modal-creator.service';

describe('ModalCreatorService', () => {
  let service: ModalCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
