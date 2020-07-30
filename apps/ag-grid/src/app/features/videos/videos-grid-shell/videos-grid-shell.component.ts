import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearchItem, YtSearchControllerService } from '@ag-grid-workspace/yt-api';
import { AllModules, GridOptions } from '@ag-grid-enterprise/all-modules';
import { VideosGridConfigService } from './services/videos-grid-config/videos-grid-config.service';
import { Module } from '@ag-grid-community/all-modules';

@Component({
  selector: 'app-videos-grid-shell',
  templateUrl: './videos-grid-shell.component.html',
  styleUrls: ['./videos-grid-shell.component.scss']
})
export class VideosGridShellComponent implements OnInit {
  constructor(private ytSearchController: YtSearchControllerService,
              private videosGridConfigService: VideosGridConfigService) {
  }

  modules: Module[] = AllModules;
  rowData$: Observable<Array<ISearchItem>>;
  gridOptions: GridOptions;


  ngOnInit(): void {
    this.gridOptions = this.videosGridConfigService.getOptions();
    this.rowData$ = this.ytSearchController.load({ searchQuery: 'test' });
  }


}
