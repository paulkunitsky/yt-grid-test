import { AgImageCellComponent } from '../../../../components/cells/ag-image-cell/ag-image-cell.component';
import { ISearchItem } from '@ag-grid-workspace/yt-api';
import { ColumnIds } from '../../../../models/column-ids.enum';
import { ColDef, GetQuickFilterTextParams, ValueGetterParams } from '@ag-grid-enterprise/all-modules';

export const imageColumn: ColDef = {
  colId: ColumnIds.ImageColumn,
  headerName: 'Image',
  flex: 2,
  cellStyle: {
    'padding': '3px'
  },
  cellRendererFramework: AgImageCellComponent,

  valueGetter(params: ValueGetterParams): string {
    return (params.data as ISearchItem).snippet.thumbnails.high.url;
  },

  getQuickFilterText(params: GetQuickFilterTextParams): string {
    return (params.data as ISearchItem).snippet.title;
  }
};
