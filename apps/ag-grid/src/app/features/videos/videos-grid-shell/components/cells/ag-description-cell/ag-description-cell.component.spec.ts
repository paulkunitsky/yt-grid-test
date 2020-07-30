import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgDescriptionCellComponent } from './ag-description-cell.component';

describe('AgDescriptionCellComponent', () => {
  let component: AgDescriptionCellComponent;
  let fixture: ComponentFixture<AgDescriptionCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgDescriptionCellComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgDescriptionCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
