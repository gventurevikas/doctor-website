import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalSearchFilterComponent } from './medical-search-filter.component';

describe('MedicalSearchFilterComponent', () => {
  let component: MedicalSearchFilterComponent;
  let fixture: ComponentFixture<MedicalSearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalSearchFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
