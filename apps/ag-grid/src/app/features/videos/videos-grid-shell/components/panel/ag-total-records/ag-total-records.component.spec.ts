import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgTotalRecordsComponent } from './ag-total-records.component';

describe('TotalRecordsComponent', () => {
  let component: AgTotalRecordsComponent;
  let fixture: ComponentFixture<AgTotalRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgTotalRecordsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgTotalRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
