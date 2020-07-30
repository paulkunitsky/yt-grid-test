import { TestBed } from '@angular/core/testing';

import { YtHrefService } from './yt-href.service';

describe('YtHrefService', () => {
  let service: YtHrefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YtHrefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*
  [TODO]: Обязательно (RESOLVED)

  Тест, который проверяет правильно ли формируется ссылка при передаче номера видео.

  COMMENT:
  added
  */
  it('should resolve correct link', () => {
    const videoId = '12345';
    const hrefToVideoPage: string = service.getHrefToVideoPage(videoId);
    expect(hrefToVideoPage).toEqual(service.root + videoId);
  });
});
