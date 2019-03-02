import { TestBed } from '@angular/core/testing';

import { PortServiceService } from './port-service.service';

describe('PortServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortServiceService = TestBed.get(PortServiceService);
    expect(service).toBeTruthy();
  });
});
