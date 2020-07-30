import { Component } from '@angular/core';
import { AgStatusBarItemComponent } from '../ag-status-bar-item-component';
import { ColumnIds } from '../../../models/column-ids.enum';
import { IToolPanelParams } from '@ag-grid-enterprise/all-modules';

@Component({
  selector: 'app-ag-selection-button',
  templateUrl: './ag-selection-button.component.html',
  styleUrls: ['./ag-selection-button.component.scss']
})
export class AgSelectionButtonComponent extends AgStatusBarItemComponent<IToolPanelParams> {
  isShowSelection = true;

  agInit(params: IToolPanelParams): void {
    super.agInit(params);
  }

  switchSelectionMode(): void {
    this.isShowSelection = !this.isShowSelection;

    if (!this.isShowSelection) {
      this.params.api.deselectAll();
    }

    this.params.columnApi.setColumnVisible(ColumnIds.CheckboxColumn, this.isShowSelection);
  }

}
