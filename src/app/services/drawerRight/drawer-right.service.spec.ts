import { TestBed } from '@angular/core/testing';

import { DrawerRightService } from './drawer-right.service';

describe('DrawerRightService', () => {
  let service: DrawerRightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrawerRightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
