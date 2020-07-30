import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgTitleCellComponent } from './ag-title-cell.component';
import { ICellRendererParams } from '@ag-grid-enterprise/all-modules';

describe('AgTitleCellComponent', () => {
  let component: AgTitleCellComponent;
  let fixture: ComponentFixture<AgTitleCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgTitleCellComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgTitleCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
