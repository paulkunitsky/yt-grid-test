import { AgTitleCellComponent } from '../../../../components/cells/ag-title-cell/ag-title-cell.component';
import { ISearchItem } from '@ag-grid-workspace/yt-api';
import { ColumnIds } from '../../../../models/column-ids.enum';
import { ColDef, GetQuickFilterTextParams, ValueGetterParams } from '@ag-grid-enterprise/all-modules';

export const videoTitleColumn: ColDef = {
  colId: ColumnIds.VideoTitleColumn,
  headerName: 'Video title',
  flex: 2,
  autoHeight: true,
  cellRendererFramework: AgTitleCellComponent,

  valueGetter(params: ValueGetterParams): string {
    return (params.data as ISearchItem).snippet.title;
  },

  getQuickFilterText(params: GetQuickFilterTextParams): string {
    return (params.data as ISearchItem).snippet.title;
  }
};
