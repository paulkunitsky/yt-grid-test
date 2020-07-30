import { YtSearchControllerPaths } from '../../../../yt-api/src/lib/controllers/yt-search-controller-paths.enum';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { YtMockApiService } from './yt-mock-api.service';
import { ytSearchResponse } from '../responses/yt-search-response';

export function makeMockResponse(statusCode: number, body: object, delayInterval: number): Observable<HttpResponse<object>> {
  return of(new HttpResponse({ status: 200, body: body })).pipe(delay(delayInterval));
}

@Injectable({ providedIn: 'root' })
export class YtMockApiInterceptor implements HttpInterceptor {
  constructor(private http: HttpClient,
              private mockApiService: YtMockApiService) {
  }

  intercept(request: HttpRequest<object>, next: HttpHandler): Observable<HttpEvent<object>> {
    if (this.mockApiService.isEnabled) {
      if (request.url.includes(YtSearchControllerPaths.load)) {
        return makeMockResponse(200, ytSearchResponse, 300);
      }
    }

    return next.handle(request);
  }

}
