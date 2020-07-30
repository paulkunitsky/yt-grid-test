import { ISearchItemSnippet } from './i-search-item-snippet';

export interface ISearchItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  },
  snippet: ISearchItemSnippet;
}
