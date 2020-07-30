import { IThumbnail } from '@ag-grid-workspace/yt-api';

export interface ISearchItemSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: IThumbnail;
    medium: IThumbnail;
    high: IThumbnail;
  },
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}
