import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestComponent } from './test.component';
import { CommonModule } from '@angular/common';
import { TestRoutingModule } from './test-routing.module';
import { YtMockApiModule } from '@ag-grid-workspace/yt-mock-api';

describe('TestComponent', (): void => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [
        CommonModule,
        TestRoutingModule,
        YtMockApiModule
      ]
    })
      .compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
