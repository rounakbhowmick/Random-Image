import { TestBed } from '@angular/core/testing';

import { PhotozoneService } from './photozone.service';

describe('PhotozoneService', () => {
  let service: PhotozoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotozoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
