import { Component, OnDestroy } from '@angular/core';
import { AgCellComponent } from '../ag-cell-component';
import { ICellRendererParams } from '@ag-grid-enterprise/all-modules';
import { GridEvents } from '@ag-grid-workspace/ag-grid-extension';

@Component({
  selector: 'app-ag-checkbox-cell',
  templateUrl: './ag-checkbox-cell.component.html',
  styleUrls: ['./ag-checkbox-cell.component.css']
})
export class AgCheckboxCellComponent extends AgCellComponent implements OnDestroy {
  constructor() {
    super();
  }

  public handleSelectionChangedEvent: () => void;
  public params: ICellRendererParams;

  /*
  [TODO]: Рекомендация (RESOLVED)
  Тип выводиться автоматически. isSelected = false (значит что isSelected имеет тип boolean)

  COMMENT:
  Типизация удалена
  */
  isSelected = false;

  /*
  [TODO]: Обязательно (RESOLVED)
  ТУТ и ДАЛЕЕ - Всегда указывать возвращаемое значение или void

  COMMENT:
  Типизация добавлена. В принципе лучше было бы подключить ваши настройки
  tslint, дабы не тратить время
  */
  agInit(params: ICellRendererParams): void {
    super.agInit(params);
    this.params = params;

    /*
    [TODO]: Обязательно (RESOLVED).
    Много лишней логики. Не ясен механизм определения состояние записи в таблицы (выделена или нет)

    Зачем нам получать данные о других элементах? За синхранизацию с другими выделенными элементами и чекбоксом в заголоке таблицы
    отвечает ag-grid. Данный метод должен отвечать только за состояние конкретной записи (node) в таблице.
    this.params.node представляет конкретный элемент списока в таблице. У него есть состояние, которое можно
    проверить isSelected(), а также события на которые можно подписаться для отслеживания состояния.

    COMMENT:
    "За синхранизацию с другими выделенными элементами и чекбоксом в заголоке таблицы
    отвечает ag-grid."
    1. Благодарю вас за внимательность! Если не ошибаюсь в данном случае тестового задания ag-grid не отвечает за синхронизацию
    с другими выделенными элементами. Ниже прикрепляю
    отрывок из тз в котором говорится об этом

    *** Please note that there is a standard agGrid checkbox header functionality which is controlled by “headerCheckboxSelection”
    and “checkboxSelection” column definition attributes. This is a convenient and quick way to implement the selection feature,
    but the point of this task above is to test your ability to customise this part.

    "Данный метод должен отвечать только за состояние конкретной записи (node) в таблице."
    2. Это действительно должно быть так. Мне кажется я вас понял и поправил код верно, уточняю конкретно:
    на момент ревью прослушка selectionChanged была установлена для params.api,
    соответственно это глобальные события (что вы не заметили);
    на текущий момент прослушка установлена для params.node,
    соответственно это локальные события.
    */
    this.handleSelectionChangedEvent = (): void => {
      const displayedRowCount: number = this.params.api.getDisplayedRowCount();
      const selectedRowCount: number = this.params.api.getSelectedNodes().length;

      if (selectedRowCount >= displayedRowCount) {
        this.selectRow();
      } else if (selectedRowCount === 0) {
        this.unselectRow();
      }
    };

    params.node.addEventListener(GridEvents.selectionChanged, this.handleSelectionChangedEvent);
  }

  unselectRow(): void {
    this.isSelected = false;
    this.params.node.setSelected(false);
  }

  selectRow(): void {
    this.isSelected = true;
    this.params.node.setSelected(true);
  }

  /*
  [TODO]: Рекомендация (RESOLVED)

  Передавать значение, а не событие. Если необходимо передать событие, то нужно указывать тип.
  Официальная документация angular:

  Typing the event object reveals a significant objection to passing the entire DOM event
  into the method: the component has too much awareness of the template details.
  It can't extract information without knowing more than it should about the HTML implementation.
  That breaks the separation of concerns between the template (what the user sees) and the component
  (how the application processes user data).

  COMMENT:
  switched to ngModelChange emitter
  */
  handleCheck(checked: boolean): void {
    if (checked) {
      this.selectRow();
    } else {
      this.unselectRow();
    }
  }

  ngOnDestroy(): void {
    /*
    [TODO]: Обязательно (RESOLVED)

    bind возвращает новую функцию замыкая контекст вызова. Это совершенно другая функция нежели в
    params.api.addEventListener(SelectionEvents.selectionChanged, this.handleSelectionChange.bind(this)).

    По факту тут отписки не происходит.
    Нужно сохранить в свойство функцию, которую возвращает bind и использовать ее для отписки и подписки.
    Как альтернатива, можно использовать стрелочную функцию.

    COMMENT:
    Рекомендация реализована через стрелочную функцию
    */
    this.params.node.removeEventListener(GridEvents.selectionChanged, this.handleSelectionChangedEvent);
  }
}
