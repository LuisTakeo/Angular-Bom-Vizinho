import { TestBed } from '@angular/core/testing';

import { IdosoService } from './idoso.service';

describe('IdosoService', () => {
  let service: IdosoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdosoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
