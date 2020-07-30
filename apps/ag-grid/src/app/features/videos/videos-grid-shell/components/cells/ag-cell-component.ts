import { ISearchItem } from '@ag-grid-workspace/yt-api';
import { ICellRendererParams } from '@ag-grid-enterprise/all-modules';
import { AgRendererComponent } from '@ag-grid-community/angular';
import { GridApi } from '@ag-grid-community/core/dist/cjs/gridApi';

export abstract class AgCellComponent implements AgRendererComponent {
  public item: ISearchItem;
  public api: GridApi;

  agInit(params: ICellRendererParams): void {
    this.item = params.data;
    this.api = params.api;
  }

  refresh(params: ICellRendererParams): boolean {
    return true;
  }
}
