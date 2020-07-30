import { Component, OnInit } from '@angular/core';
import { YtMockApiService } from '../services/yt-mock-api.service';

@Component({
  selector: 'app-api-switcher',
  templateUrl: './api-switcher.component.html',
  styleUrls: ['./api-switcher.component.css']
})
export class ApiSwitcherComponent implements OnInit {

  constructor(public mockApiService: YtMockApiService) {
  }

  ngOnInit(): void {
  }

  switchApi(): void {
    if (this.mockApiService.isEnabled) {
      this.mockApiService.disable();
    } else {
      this.mockApiService.enable();
    }
  }

}
