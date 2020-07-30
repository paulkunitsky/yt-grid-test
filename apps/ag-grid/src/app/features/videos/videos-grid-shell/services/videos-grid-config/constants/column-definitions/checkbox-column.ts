import { ColDef } from '@ag-grid-enterprise/all-modules';
import { ColumnIds } from '../../../../models/column-ids.enum';
import { AgCheckboxHeaderComponent } from '../../../../components/headers/ag-checkbox-header/ag-checkbox-header.component';
import { AgCheckboxCellComponent } from '../../../../components/cells/ag-checkbox-cell/ag-checkbox-cell.component';

export const checkboxColumn: ColDef = {
  colId: ColumnIds.CheckboxColumn,
  headerName: '',
  flex: 1,
  maxWidth: 40,
  headerComponentFramework: AgCheckboxHeaderComponent,
  cellRendererFramework: AgCheckboxCellComponent,
  menuTabs: []
};
