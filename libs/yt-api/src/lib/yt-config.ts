import { IYtConfig } from './i-yt-config';
import { Injectable } from '@angular/core';

@Injectable()
export class YtConfig implements IYtConfig {
  constructor(public apiKeyYoutube: string) {
  }
}
