import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgPublishCellComponent } from './ag-publish-cell.component';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';
import { AgGridModule } from '@ag-grid-community/angular';

describe('AgPublishCellComponent', () => {
  let component: AgPublishCellComponent;
  let fixture: ComponentFixture<AgPublishCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AgPublishCellComponent
      ],
      imports: [
        CommonModule,
        MomentModule,
        AgGridModule.withComponents([
          AgPublishCellComponent
        ])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgPublishCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
