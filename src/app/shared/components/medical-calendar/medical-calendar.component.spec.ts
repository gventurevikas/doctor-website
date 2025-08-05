import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCalendarComponent } from './medical-calendar.component';

describe('MedicalCalendarComponent', () => {
  let component: MedicalCalendarComponent;
  let fixture: ComponentFixture<MedicalCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
