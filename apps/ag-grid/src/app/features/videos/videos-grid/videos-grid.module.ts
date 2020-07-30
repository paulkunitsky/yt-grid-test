import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosGridComponent } from './videos-grid.component';
import { AgGridModule } from '@ag-grid-community/angular';

@NgModule({
  declarations: [
    VideosGridComponent
  ],
  exports: [
    VideosGridComponent
  ],
  imports: [
    CommonModule,
    AgGridModule
  ]
})
export class VideosGridModule {
}
