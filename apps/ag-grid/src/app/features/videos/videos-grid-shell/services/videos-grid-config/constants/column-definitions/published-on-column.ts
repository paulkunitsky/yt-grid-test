import { AgPublishCellComponent } from '../../../../components/cells/ag-publish-cell/ag-publish-cell.component';
import { formatDatetime } from '../../helpers/format-datetime';
import { ISearchItem } from '@ag-grid-workspace/yt-api';
import { ColumnIds } from '../../../../models/column-ids.enum';
import { ColDef, GetQuickFilterTextParams, ValueGetterParams } from '@ag-grid-enterprise/all-modules';
import { mf_datetime } from '@ag-grid-workspace/shared';
import * as moment from 'moment';

export const publishedOnColumn: ColDef = {
  colId: ColumnIds.PublishedOnColumn,
  headerName: 'Published on',
  flex: 1,
  cellRendererFramework: AgPublishCellComponent,

  valueGetter(params: ValueGetterParams): string {
    return moment((params.data as ISearchItem).snippet.publishedAt).format(mf_datetime);
  },

  getQuickFilterText(params: GetQuickFilterTextParams): string {
    return formatDatetime((params.data as ISearchItem).snippet.publishedAt);
  }
};
