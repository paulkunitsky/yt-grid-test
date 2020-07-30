import { TestBed } from '@angular/core/testing';

import { YtMockApiService } from './yt-mock-api.service';

describe('YtMockApiService', () => {
  let service: YtMockApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YtMockApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
