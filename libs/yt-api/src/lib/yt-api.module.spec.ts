import { async, TestBed } from '@angular/core/testing';
import { YtApiModule } from './yt-api.module';

describe('YtApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [YtApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(YtApiModule).toBeDefined();
  });
});
