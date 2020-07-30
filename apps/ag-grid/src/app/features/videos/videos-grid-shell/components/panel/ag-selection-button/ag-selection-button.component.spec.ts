import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgSelectionButtonComponent } from './ag-selection-button.component';

describe('SelectionButtonComponent', () => {
  let component: AgSelectionButtonComponent;
  let fixture: ComponentFixture<AgSelectionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgSelectionButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgSelectionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
