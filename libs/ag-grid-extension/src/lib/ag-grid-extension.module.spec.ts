import { async, TestBed } from '@angular/core/testing';
import { AgGridExtensionModule } from './ag-grid-extension.module';

describe('AgGridExtensionModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AgGridExtensionModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AgGridExtensionModule).toBeDefined();
  });
});
