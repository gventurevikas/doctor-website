import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalStatsCardComponent } from './medical-stats-card.component';

describe('MedicalStatsCardComponent', () => {
  let component: MedicalStatsCardComponent;
  let fixture: ComponentFixture<MedicalStatsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalStatsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalStatsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
