import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalNotificationsComponent } from './medical-notifications.component';

describe('MedicalNotificationsComponent', () => {
  let component: MedicalNotificationsComponent;
  let fixture: ComponentFixture<MedicalNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
