import { Component, OnDestroy } from '@angular/core';
import { AgStatusBarItemComponent } from '../ag-status-bar-item-component';
import { IToolPanelParams } from '@ag-grid-enterprise/all-modules';
import { GridEvents } from '@ag-grid-workspace/ag-grid-extension';

@Component({
  selector: 'app-ag-total-records',
  templateUrl: './ag-total-records.component.html',
  styleUrls: ['./ag-total-records.component.scss']
})
export class AgTotalRecordsComponent extends AgStatusBarItemComponent<IToolPanelParams> implements OnDestroy {
  public count = 0;
  private handleModelUpdatedEvent: () => void;

  agInit(params: IToolPanelParams): void {
    super.agInit(params);
    this.handleModelUpdatedEvent = (): void => {
      this.count = this.params.api.getDisplayedRowCount();
    };
    this.params.api.addEventListener(GridEvents.modelUpdated, this.handleModelUpdatedEvent);
  }

  ngOnDestroy(): void {
    /*
    [TODO]: Обязательно (RESOLVED)

    bind возвращает новую функцию замыкая контекст вызова. Это совершенно другая функция нежели в
    this.params.api.addEventListener('modelUpdated', this.updateModel.bind(this)).

    По факту тут отписки не происходит.
    Нужно сохранить в свойство функцию, которую возвращает bind и использовать ее для отписки и подписки.
    Как альтернатива, можно использовать стрелочную функцию.

    COMMENT:
    Рекомендация реализована через стрелочную функцию
    */
    this.params.api.removeEventListener(GridEvents.modelUpdated, this.handleModelUpdatedEvent);
  }
}
