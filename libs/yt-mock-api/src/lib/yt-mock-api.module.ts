import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiSwitcherComponent } from './api-switcher/api-switcher.component';
import { YtApiModule } from '@ag-grid-workspace/yt-api';
import { YtMockApiInterceptor } from './services/yt-mock-api.interceptor';

@NgModule({
  declarations: [
    ApiSwitcherComponent
  ],
  imports: [
    CommonModule,
    YtApiModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: YtMockApiInterceptor, multi: true }
  ],
  exports: [
    HttpClientModule,
    ApiSwitcherComponent
  ]
})
export class YtMockApiModule {
}
