import { Component } from '@angular/core';
import { AgCellComponent } from '../ag-cell-component';
import { mf_datetime } from 'libs/shared/src/lib/constants/moment-format';

@Component({
  selector: 'app-ag-publish-cell',
  templateUrl: './ag-publish-cell.component.html',
  styleUrls: ['./ag-publish-cell.component.scss']
})
export class AgPublishCellComponent extends AgCellComponent {
  readonly mf_datetime = mf_datetime;

  constructor() {
    super();
  }

}
