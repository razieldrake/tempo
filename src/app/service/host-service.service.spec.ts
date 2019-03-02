import { TestBed } from '@angular/core/testing';

import { HostServiceService } from './host-service.service';

describe('HostServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HostServiceService = TestBed.get(HostServiceService);
    expect(service).toBeTruthy();
  });
});
