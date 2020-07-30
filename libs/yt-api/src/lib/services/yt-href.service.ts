import { Injectable } from '@angular/core';
import { ISearchItem } from '@ag-grid-workspace/yt-api';

@Injectable({
  providedIn: 'root'
})
export class YtHrefService {
  readonly root = 'https://youtube.com/watch?v=';

  constructor() {
  }

  getHrefToVideoPage(videoId: string): string {
    return this.root + videoId;
  }
}
