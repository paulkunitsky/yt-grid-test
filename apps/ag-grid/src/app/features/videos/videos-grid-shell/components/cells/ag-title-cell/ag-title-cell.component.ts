import { Component } from '@angular/core';
import { AgCellComponent } from '../ag-cell-component';
import { YtHrefService } from '@ag-grid-workspace/yt-api';
import { ICellRendererParams } from '@ag-grid-enterprise/all-modules';

@Component({
  selector: 'app-ag-title-cell',
  templateUrl: './ag-title-cell.component.html',
  styleUrls: ['./ag-title-cell.component.css']
})
export class AgTitleCellComponent extends AgCellComponent {
  hrefToVideoPage: string;

  constructor(private ytHrefService: YtHrefService) {
    super();
  }

  agInit(params: ICellRendererParams): void {
    super.agInit(params);
    this.hrefToVideoPage = this.ytHrefService.getHrefToVideoPage(this.item.id.videoId);
  }

}
