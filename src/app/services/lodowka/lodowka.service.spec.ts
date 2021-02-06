import { TestBed } from '@angular/core/testing';

import { LodowkaService } from './lodowka.service';

describe('LodowkaService', () => {
  let service: LodowkaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LodowkaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
