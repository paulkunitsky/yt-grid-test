import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgSelectedRecordsComponent } from './ag-selected-records.component';
import { GridEvents } from '@ag-grid-workspace/ag-grid-extension';

describe('SelectedRecordsComponent', () => {
  let component: AgSelectedRecordsComponent;
  let fixture: ComponentFixture<AgSelectedRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgSelectedRecordsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgSelectedRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
