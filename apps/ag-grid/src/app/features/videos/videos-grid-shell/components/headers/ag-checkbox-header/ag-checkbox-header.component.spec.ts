import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgCheckboxHeaderComponent } from './ag-checkbox-header.component';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';
import { AgGridModule } from '@ag-grid-community/angular';
import { FormsModule } from '@angular/forms';

describe('CheckboxHeaderComponent', () => {
  let component: AgCheckboxHeaderComponent;
  let fixture: ComponentFixture<AgCheckboxHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AgCheckboxHeaderComponent
      ],
      imports: [
        CommonModule,
        MomentModule,
        AgGridModule.withComponents([
          AgCheckboxHeaderComponent
        ]),
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgCheckboxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
