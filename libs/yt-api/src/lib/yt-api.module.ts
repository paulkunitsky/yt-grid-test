import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { YtConfig } from './yt-config';
import { YtSearchControllerService } from './controllers/yt-search-controller.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class YtApiModule {
  static forRoot(config: YtConfig): ModuleWithProviders {
    return {
      ngModule: YtApiModule,
      providers: [
        YtSearchControllerService,
        { provide: YtConfig, useValue: config }
      ]
    };
  }
}
