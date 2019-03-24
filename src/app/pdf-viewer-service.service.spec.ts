import { TestBed } from '@angular/core/testing';

import { PdfViewerServiceService } from './pdf-viewer-service.service';

describe('PdfViewerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdfViewerServiceService = TestBed.get(PdfViewerServiceService);
    expect(service).toBeTruthy();
  });
});
