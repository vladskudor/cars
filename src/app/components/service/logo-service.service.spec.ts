import { TestBed } from '@angular/core/testing';

import { LogoServiceService } from './logo-service.service';

describe('LogoServiceService', () => {
  let service: LogoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
