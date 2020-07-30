import { IPageInfo } from './i-page-info';
import { ISearchItem } from './i-search-item';

export interface ISearchResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: IPageInfo;
  items: Array<ISearchItem>;
}
