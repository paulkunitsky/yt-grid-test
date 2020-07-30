import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgCheckboxCellComponent } from './ag-checkbox-cell.component';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';
import { AgGridModule } from '@ag-grid-community/angular';
import { FormsModule } from '@angular/forms';

describe('AgCheckboxCellComponent', () => {
  let component: AgCheckboxCellComponent;
  let fixture: ComponentFixture<AgCheckboxCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AgCheckboxCellComponent
      ],
      imports: [
        CommonModule,
        MomentModule,
        AgGridModule.withComponents([
          AgCheckboxCellComponent
        ]),
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgCheckboxCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
