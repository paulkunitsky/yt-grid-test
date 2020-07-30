import { Component } from '@angular/core';
import { AgCellComponent } from '../ag-cell-component';

@Component({
  selector: 'app-ag-image-cell',
  templateUrl: './ag-image-cell.component.html',
  styleUrls: ['./ag-image-cell.component.css']
})
export class AgImageCellComponent extends AgCellComponent {
  constructor() {
    super();
  }

}
