import { Component, OnDestroy } from '@angular/core';
import { AgStatusBarItemComponent } from '../ag-status-bar-item-component';
import { IToolPanelParams } from '@ag-grid-enterprise/all-modules';
import { GridEvents } from '@ag-grid-workspace/ag-grid-extension';

@Component({
  selector: 'app-ag-selected-records',
  templateUrl: './ag-selected-records.component.html',
  styleUrls: ['./ag-selected-records.component.scss']
})
export class AgSelectedRecordsComponent extends AgStatusBarItemComponent<IToolPanelParams> implements OnDestroy {
  count = 0;
  handleSelectionChangedEvent: () => void;

  agInit(params: IToolPanelParams): void {
    super.agInit(params);
    this.handleSelectionChangedEvent = (): void => {
      this.count = this.params.api.getSelectedRows().length;
    };
    this.params.api.addEventListener(GridEvents.selectionChanged, this.handleSelectionChangedEvent);
  }

  ngOnDestroy(): void {
    /*
    [TODO]: Обязательно (RESOLVED)

    bind возвращает новую функцию замыкая контекст вызова. Это совершенно другая функция нежели в
    this.params.api.addEventListener(SelectionEvents.selectionChanged, this.selectionChange.bind(this));.

    По факту тут отписки не происходит.
    Нужно сохранить в свойство функцию, которую возвращает bind и использовать ее для отписки и подписки.
    Как альтернатива, можно использовать стрелочную функцию.

    COMMENT:
    Рекомендация реализована через стрелочную функцию
    */
    this.params.api.removeEventListener(GridEvents.selectionChanged, this.handleSelectionChangedEvent);
  }
}
