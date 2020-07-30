import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISearchItem } from '@ag-grid-workspace/yt-api';
import { Observable } from 'rxjs';
import { GridOptions } from '@ag-grid-enterprise/all-modules';
import { AgGridModule } from '@ag-grid-community/angular';

@Component({
  selector: 'app-videos-grid',
  templateUrl: './videos-grid.component.html',
  styleUrls: ['./videos-grid.component.scss']
})
export class VideosGridComponent {
  constructor() {
  }

  @Input() modules: Array<AgGridModule>;
  @Input() rowData$: Observable<Array<ISearchItem>>;
  @Input() gridOptions: GridOptions;
  @Input() isAllRowsSelected: boolean;

  @Output() pageChange = new EventEmitter<number>();

}
