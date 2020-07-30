import { Injectable } from '@angular/core';
import { ISearchFilter } from '../models/i-search-filter';
import { HttpClient } from '@angular/common/http';
import { YtConfig } from '../yt-config';
import { Observable } from 'rxjs';
import { ISearchResponse } from '../models/i-search-response';
import { map } from 'rxjs/operators';
import { ISearchItem } from '../models/i-search-item';
import { YtSearchControllerPaths } from './yt-search-controller-paths.enum';

@Injectable({
  providedIn: 'root'
})
export class YtSearchControllerService {

  constructor(private config: YtConfig,
              private httpClient: HttpClient) {
  }

  load(filter: ISearchFilter): Observable<Array<ISearchItem>> {
    return this.httpClient.get<ISearchResponse>(YtSearchControllerPaths.load, {
      params: {
        key: this.config.apiKeyYoutube,
        maxResults: '50',
        type: 'video',
        part: 'snippet',
        q: filter.searchQuery
      }
    }).pipe(
      map((response) => response.items)
    );
  }
}
