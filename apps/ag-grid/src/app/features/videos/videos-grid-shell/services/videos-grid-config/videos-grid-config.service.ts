import { Inject, Injectable } from '@angular/core';
import { defaultColumn } from './constants/default-column/default-column';
import { checkboxColumn } from './constants/column-definitions/checkbox-column';
import { imageColumn } from './constants/column-definitions/image-column';
import { publishedOnColumn } from './constants/column-definitions/published-on-column';
import { videoTitleColumn } from './constants/column-definitions/video-title-column';
import { descriptionColumn } from './constants/column-definitions/description-column';
import { RowSelection } from '@ag-grid-workspace/ag-grid-extension';
import { AgSelectedRecordsComponent } from '../../components/panel/ag-selected-records/ag-selected-records.component';
import { AgSelectionButtonComponent } from '../../components/panel/ag-selection-button/ag-selection-button.component';
import { AgTotalRecordsComponent } from '../../components/panel/ag-total-records/ag-total-records.component';
import { GetContextMenuItemsParams, GridOptions } from '@ag-grid-enterprise/all-modules';
import { getRowHeight } from './helpers/get-row-height';
import { ColumnIds } from '../../models/column-ids.enum';
import { ISearchItem, YtHrefService } from '@ag-grid-workspace/yt-api';
import { MenuItemDef } from '@ag-grid-community/core/dist/cjs/entities/gridOptions';
import { WINDOW } from '@ag-grid-workspace/shared';

@Injectable({
  providedIn: 'root'
})
export class VideosGridConfigService {

  constructor(@Inject(WINDOW) private windowRef: Window,
              private ytHrefService: YtHrefService) {
  }

  getOptions(): GridOptions {
    return {
      defaultColDef: defaultColumn,
      columnDefs: [
        checkboxColumn,
        imageColumn,
        publishedOnColumn,
        videoTitleColumn,
        descriptionColumn
      ],
      getRowHeight: getRowHeight,
      rowSelection: RowSelection.multiple,
      rowMultiSelectWithClick: true,
      suppressCellSelection: true,
      suppressRowClickSelection: true,
      enableRangeSelection: true,
      getContextMenuItems: this.getContextMenuItems.bind(this),
      /*
      [TODO]: Рекомендация (RESOLVED)
      Можно использовать statusPanelFramework вместо statusPanel. Это позволит не использовать frameworkComponents

      COMMENT:
      удалено
      */
      statusBar: {
        statusPanels: [
          /*
          [TODO]: Рекомендация (RESOLVED)
          Можно использовать statusPanelFramework вместо statusPanel. Это позволит не использовать frameworkComponents

          COMMENT:
          обновлено
          */
          { statusPanelFramework: AgSelectionButtonComponent, align: 'left' },
          { statusPanelFramework: AgSelectedRecordsComponent, align: 'right' },
          { statusPanelFramework: AgTotalRecordsComponent, align: 'right' }
        ]
      }
    };
  }

  getContextMenuItems(params: GetContextMenuItemsParams): (string | MenuItemDef)[] {
    switch (params.column.getColId()) {
      case ColumnIds.VideoTitleColumn:
        return [
          'copy',
          'copyWithHeaders',
          'separator',
          {
            icon: `<span class="ag-icon ag-icon-linked"></span>`,
            name: 'Open in new tab',
            action: () => {
              const searchItem: ISearchItem = params.node.data;
              /*
              [TODO]: Обязательно (RESOLVED).

              Есть сервис, который отвечает за формирование ссылок YtHrefService. Нужно его использовать. Это позволит переиспользовать код.

              COMMENT:
              Исправлено
              */
              this.windowRef.open(this.ytHrefService.getHrefToVideoPage(searchItem.id.videoId), '_blank');
            }
          }
        ];

      default:
        return [
          'copy',
          'copyWithHeaders'
        ];
    }
  }


}
