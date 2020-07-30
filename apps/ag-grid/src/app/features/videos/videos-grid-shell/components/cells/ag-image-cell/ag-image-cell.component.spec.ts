import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgImageCellComponent } from './ag-image-cell.component';

describe('AgImageCellComponent', () => {
  let component: AgImageCellComponent;
  let fixture: ComponentFixture<AgImageCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgImageCellComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgImageCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
