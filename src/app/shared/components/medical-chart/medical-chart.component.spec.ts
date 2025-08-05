import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalChartComponent } from './medical-chart.component';

describe('MedicalChartComponent', () => {
  let component: MedicalChartComponent;
  let fixture: ComponentFixture<MedicalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
