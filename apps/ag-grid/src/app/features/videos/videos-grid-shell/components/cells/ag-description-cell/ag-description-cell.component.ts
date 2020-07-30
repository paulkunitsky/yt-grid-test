import { Component } from '@angular/core';
import { AgCellComponent } from '../ag-cell-component';

@Component({
  selector: 'app-ag-description-cell',
  templateUrl: './ag-description-cell.component.html',
  styleUrls: ['./ag-description-cell.component.css']
})
export class AgDescriptionCellComponent extends AgCellComponent {

  constructor() {
    super();
  }

}
