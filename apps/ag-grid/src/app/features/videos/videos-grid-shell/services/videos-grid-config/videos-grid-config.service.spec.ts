import { TestBed } from '@angular/core/testing';

import { VideosGridConfigService } from './videos-grid-config.service';
import { WINDOW } from '@ag-grid-workspace/shared';

describe('VideosGridConfigService', () => {
  let service: VideosGridConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: WINDOW, useValue: window }
      ]
    });
    service = TestBed.inject(VideosGridConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
