import { AgDescriptionCellComponent } from '../../../../components/cells/ag-description-cell/ag-description-cell.component';
import { ISearchItem } from '@ag-grid-workspace/yt-api';
import { ColumnIds } from '../../../../models/column-ids.enum';
import { ColDef, GetQuickFilterTextParams, ValueGetterParams } from '@ag-grid-enterprise/all-modules';

export const descriptionColumn: ColDef = {
  colId: ColumnIds.DescriptionColumn,
  headerName: 'Description',
  flex: 5,
  autoHeight: true,
  cellRendererFramework: AgDescriptionCellComponent,

  valueGetter(params: ValueGetterParams): string {
    return (params.data as ISearchItem).snippet.description;
  },

  getQuickFilterText(params: GetQuickFilterTextParams): string {
    return (params.data as ISearchItem).snippet.description;
  }
};
