import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosRoutingModule } from './videos-routing.module';
import { MomentModule } from 'ngx-moment';
import { AgGridModule } from '@ag-grid-community/angular';
import { VideosGridShellComponent } from './videos-grid-shell/videos-grid-shell.component';
import { AgImageCellComponent } from './videos-grid-shell/components/cells/ag-image-cell/ag-image-cell.component';
import { AgPublishCellComponent } from './videos-grid-shell/components/cells/ag-publish-cell/ag-publish-cell.component';
import { AgTitleCellComponent } from './videos-grid-shell/components/cells/ag-title-cell/ag-title-cell.component';
import { AgDescriptionCellComponent } from './videos-grid-shell/components/cells/ag-description-cell/ag-description-cell.component';
import { AgSelectedRecordsComponent } from './videos-grid-shell/components/panel/ag-selected-records/ag-selected-records.component';
import { AgSelectionButtonComponent } from './videos-grid-shell/components/panel/ag-selection-button/ag-selection-button.component';
import { AgTotalRecordsComponent } from './videos-grid-shell/components/panel/ag-total-records/ag-total-records.component';
import { AgCheckboxHeaderComponent } from './videos-grid-shell/components/headers/ag-checkbox-header/ag-checkbox-header.component';
import { AgCheckboxCellComponent } from './videos-grid-shell/components/cells/ag-checkbox-cell/ag-checkbox-cell.component';
import { YtApiModule } from '@ag-grid-workspace/yt-api';
import { environment } from '../../../environments/environment';
import { YtMockApiModule } from '@ag-grid-workspace/yt-mock-api';
import { VideosGridModule } from './videos-grid/videos-grid.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromVideosGrid from './state/videos.reducer';


@NgModule({
  imports: [
    CommonModule,
    MomentModule,
    AgGridModule.withComponents([
      VideosGridShellComponent,
      AgImageCellComponent,
      AgPublishCellComponent,
      AgTitleCellComponent,
      AgDescriptionCellComponent,
      AgSelectedRecordsComponent,
      AgSelectionButtonComponent,
      AgTotalRecordsComponent,
      AgCheckboxHeaderComponent,
      AgCheckboxCellComponent
    ]),
    YtApiModule.forRoot({ apiKeyYoutube: environment.apiKeyYoutube }),
    StoreModule.forFeature(fromVideosGrid.videosFeatureKey, fromVideosGrid.reducer),
    YtMockApiModule,
    VideosGridModule,
    FormsModule,
    VideosRoutingModule
  ],
  declarations: [
    VideosGridShellComponent,
    AgImageCellComponent,
    AgPublishCellComponent,
    AgTitleCellComponent,
    AgDescriptionCellComponent,
    AgSelectedRecordsComponent,
    AgSelectionButtonComponent,
    AgTotalRecordsComponent,
    AgCheckboxHeaderComponent,
    AgCheckboxCellComponent
  ],
  exports: []
})
export class VideosModule {
}
