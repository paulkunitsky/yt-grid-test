import { AgFrameworkComponent } from '@ag-grid-community/angular';

export abstract class AgStatusBarItemComponent<IToolPanelParams> implements AgFrameworkComponent<IToolPanelParams> {
  params: IToolPanelParams;

  agInit(params: IToolPanelParams): void {
    this.params = params;
  }
}
