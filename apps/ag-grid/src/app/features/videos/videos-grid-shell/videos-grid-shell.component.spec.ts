import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosGridShellComponent } from './videos-grid-shell.component';
import { AgImageCellComponent } from './components/cells/ag-image-cell/ag-image-cell.component';
import { AgPublishCellComponent } from './components/cells/ag-publish-cell/ag-publish-cell.component';
import { AgTitleCellComponent } from './components/cells/ag-title-cell/ag-title-cell.component';
import { AgDescriptionCellComponent } from './components/cells/ag-description-cell/ag-description-cell.component';
import { AgSelectedRecordsComponent } from './components/panel/ag-selected-records/ag-selected-records.component';
import { AgSelectionButtonComponent } from './components/panel/ag-selection-button/ag-selection-button.component';
import { AgTotalRecordsComponent } from './components/panel/ag-total-records/ag-total-records.component';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';
import { AgGridModule } from '@ag-grid-community/angular';
import { YtApiModule } from '@ag-grid-workspace/yt-api';
import { environment } from '../../../../environments/environment';
import { YtMockApiModule } from '@ag-grid-workspace/yt-mock-api';
import { agGridKey, WINDOW } from '@ag-grid-workspace/shared';
import { AllModules, LicenseManager, ModuleRegistry } from '@ag-grid-enterprise/all-modules';
import { AgCheckboxHeaderComponent } from './components/headers/ag-checkbox-header/ag-checkbox-header.component';
import { AgCheckboxCellComponent } from './components/cells/ag-checkbox-cell/ag-checkbox-cell.component';
import { VideosGridModule } from '../videos-grid/videos-grid.module';
import { FormsModule } from '@angular/forms';

describe('VideosGridShellComponent', () => {
  let component: VideosGridShellComponent;
  let fixture: ComponentFixture<VideosGridShellComponent>;

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
        AgCheckboxHeaderComponent,
        AgCheckboxCellComponent
      ],
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
        YtMockApiModule,
        VideosGridModule,
        FormsModule
      ],
      providers: [
        { provide: WINDOW, useValue: window }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosGridShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
