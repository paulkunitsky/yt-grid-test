import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { YtMockApiModule } from '@ag-grid-workspace/yt-mock-api';


@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    YtMockApiModule
  ]
})
export class TestModule {
}
