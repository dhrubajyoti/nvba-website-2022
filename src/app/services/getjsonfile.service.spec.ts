import { TestBed } from '@angular/core/testing';

import { GetjsonfileService } from './getjsonfile.service';

describe('GetjsonfileService', () => {
  let service: GetjsonfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetjsonfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
