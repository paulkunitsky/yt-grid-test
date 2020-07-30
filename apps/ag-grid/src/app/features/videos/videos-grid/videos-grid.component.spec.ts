import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosGridComponent } from './videos-grid.component';
import { VideosGridShellComponent } from '../videos-grid-shell/videos-grid-shell.component';
import { AgImageCellComponent } from '../videos-grid-shell/components/cells/ag-image-cell/ag-image-cell.component';
import { AgPublishCellComponent } from '../videos-grid-shell/components/cells/ag-publish-cell/ag-publish-cell.component';
import { AgTitleCellComponent } from '../videos-grid-shell/components/cells/ag-title-cell/ag-title-cell.component';
import { AgDescriptionCellComponent } from '../videos-grid-shell/components/cells/ag-description-cell/ag-description-cell.component';
import { AgSelectedRecordsComponent } from '../videos-grid-shell/components/panel/ag-selected-records/ag-selected-records.component';
import { AgSelectionButtonComponent } from '../videos-grid-shell/components/panel/ag-selection-button/ag-selection-button.component';
import { AgTotalRecordsComponent } from '../videos-grid-shell/components/panel/ag-total-records/ag-total-records.component';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';
import { AgGridModule } from '@ag-grid-community/angular';
import { YtApiModule } from '@ag-grid-workspace/yt-api';
import { environment } from '../../../../environments/environment';
import { YtMockApiModule } from '@ag-grid-workspace/yt-mock-api';
import { agGridKey } from '@ag-grid-workspace/shared';
import { AllModules, LicenseManager, ModuleRegistry } from '@ag-grid-enterprise/all-modules';

describe('VideosGridComponent', () => {
  let component: VideosGridComponent;
  let fixture: ComponentFixture<VideosGridComponent>;

  beforeEach(async(() => {
    LicenseManager.setLicenseKey(agGridKey);
    ModuleRegistry.registerModules(AllModules);

    TestBed.configureTestingModule({
      declarations: [
        VideosGridShellComponent,
        AgImageCellComponent,
        AgPublishCellComponent,
        AgTitleCellComponent,
        AgDescriptionCellComponent,
        AgSelectedRecordsComponent,
        AgSelectionButtonComponent,
        AgTotalRecordsComponent,
        VideosGridComponent
      ],
      imports: [
        CommonModule,
        MomentModule,
        AgGridModule.withComponents([
          AgImageCellComponent,
          AgPublishCellComponent,
          AgTitleCellComponent,
          AgDescriptionCellComponent,
          AgSelectedRecordsComponent,
          AgSelectionButtonComponent,
          AgTotalRecordsComponent
        ]),
        YtApiModule.forRoot({ apiKeyYoutube: environment.apiKeyYoutube }),
        YtMockApiModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
