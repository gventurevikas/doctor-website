import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalModalComponent } from './medical-modal.component';

describe('MedicalModalComponent', () => {
  let component: MedicalModalComponent;
  let fixture: ComponentFixture<MedicalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
