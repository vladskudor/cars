import { TestBed } from '@angular/core/testing';

import { InterseptorsService } from './interseptors.service';

describe('InterseptorsService', () => {
  let service: InterseptorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterseptorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
