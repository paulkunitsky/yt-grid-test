import { ICellRendererParams } from '@ag-grid-enterprise/all-modules';
import { AgRendererComponent } from '@ag-grid-community/angular';

export abstract class AgHeaderComponent implements AgRendererComponent {
  public params: ICellRendererParams;

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams): boolean {
    return true;
  }
}
