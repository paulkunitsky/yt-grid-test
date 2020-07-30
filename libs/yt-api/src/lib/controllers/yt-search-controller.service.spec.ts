import { TestBed } from '@angular/core/testing';
import { YtSearchControllerService } from './yt-search-controller.service';
import { ISearchItem, YtApiModule } from '@ag-grid-workspace/yt-api';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../../apps/ag-grid/src/environments/environment';

describe('YtSearchControllerService', () => {
  let ytSearchControllerService: YtSearchControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        YtApiModule.forRoot({ apiKeyYoutube: environment.apiKeyYoutube })
      ]
    });
    ytSearchControllerService = TestBed.inject(YtSearchControllerService);
  });

  it('load() should return value from observable',
    (done) => {
      ytSearchControllerService.load({ searchQuery: 'search' }).subscribe({
        next: (items: Array<ISearchItem>) => {
          expect(items !== null).toBe(true);
          done();
        },
        error: (err) => {
          expect(Boolean(err)).toBe(true);
        }
      });
    });
});
