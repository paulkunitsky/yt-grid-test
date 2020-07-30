import { Component, OnDestroy } from '@angular/core';
import { AgHeaderComponent } from '../ag-header-component';
import { GridEvents } from '@ag-grid-workspace/ag-grid-extension';
import { ICellRendererParams } from '@ag-grid-enterprise/all-modules';

@Component({
  selector: 'app-ag-checkbox-header',
  templateUrl: './ag-checkbox-header.component.html',
  styleUrls: ['./ag-checkbox-header.component.css']
})
export class AgCheckboxHeaderComponent extends AgHeaderComponent implements OnDestroy {
  constructor() {
    super();
  }

  private _isActive: boolean;

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

  /*
  [TODO]: Обязательно (RESOLVED)
  Указать тип.

  COMMENT:
  Типизация добавлена.
  */
  handleSelectionChangedEvent: () => void;

  /*
  [TODO]: Обязательно (RESOLVED)
  Лишний код - удалить.

  COMMENT:
  Удалено
  */

  agInit(params: ICellRendererParams): void {
    super.agInit(params);

    /*
    [TODO]: Обязательно (RESOLVED).
    У api ag-grid есть getDisplayedRowCount. Можно сравнивать общее количество строк и количество выделенных
    строк, таким образом определяя выделен ли чекбокс.

    COMMENT:
    Рекомендация применена
    */
    this.handleSelectionChangedEvent = (): void => {
      const displayedRowCount: number = this.params.api.getDisplayedRowCount();
      const selectedRowCount: number = this.params.api.getSelectedNodes().length;

      if (displayedRowCount === selectedRowCount) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    };
    this.params.api.addEventListener(GridEvents.selectionChanged, this.handleSelectionChangedEvent);
  }

  /*
  [TODO]: Обязательно (RESOLVED)
  Всегда указывать возвращаемое значение или void
  Неиспользуемый код. Удалить или использовать.

  COMMENT:
  Рекомендация не действительна, так как метод удален по причине:
  подход с использованием activate, deactivate методов заменен на подход с использованием
  приватного поля с открытым доступом через геттер и setter. Это позволяет
  открывать стейт чекбокса с целями:
  1. безопасного внешнего программного доступа
  2. внешнего открытия поля для view data-binding feature
  */

  /*
  [TODO]: Обязательно (RESOLVED)
  Всегда указывать возвращаемое значение или void

  COMMENT:
  Рекомендация не действительна, так как метод удален по причине:
  подход с использованием activate, deactivate методов заменен на подход с использованием
  приватного поля с открытым доступом через геттер и setter. Это позволяет
  открывать стейт чекбокса с целями:
  1. безопасного внешнего программного доступа
  2. внешнего открытия поля для view data-binding feature
  */

  selectAll(): void {
    this.params.api.selectAllFiltered();
  }

  unselectAll(): void {
    this.params.api.deselectAllFiltered();
  }

  /*
  [TODO]: Обязательно (RESOLVED)
  Приходит объект события, а не значение. Результат всегда true

  COMMENT:
  Метод привязан к ngModelChange, где поле связанное через two-way data binding
  является boolean значением. Типизация параметра теперь точно верна.
  */
  handleCheck(value: boolean): void {
    if (value) {
      this.selectAll();
    } else {
      this.unselectAll();
    }
  }

  ngOnDestroy(): void {
    /*
    [TODO]: Обязательно (RESOLVED)

    bind возвращает новую функцию замыкая контекст вызова. Это совершенно другая функция нежели в
    this.params.api.addEventListener(SelectionEvents.selectionChanged, this.handleSelectionChanged.bind(this)).

    По факту тут отписки не происходит.
    Нужно сохранисть в свойство функцию, которую возвращает bind и использовать ее для отписки и подписки.
    Как альтернатива, можно использовать стрелочную функцию.

    COMMENT:
    Рекомендация реализована через стрелочную функцию
    */
    this.params.api.addEventListener(GridEvents.selectionChanged, this.handleSelectionChangedEvent);
  }

}
