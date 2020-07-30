import { async, TestBed } from '@angular/core/testing';
import { YtMockApiModule } from './yt-mock-api.module';
import { ApiSwitcherComponent } from './api-switcher/api-switcher.component';
import { CommonModule } from '@angular/common';
import { YtApiModule } from '@ag-grid-workspace/yt-api';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { YtMockApiInterceptor } from './services/yt-mock-api.interceptor';

describe('YtMockApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      ]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(YtMockApiModule).toBeDefined();
  });
});
