import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalConfirmDialogComponent } from './medical-confirm-dialog.component';

describe('MedicalConfirmDialogComponent', () => {
  let component: MedicalConfirmDialogComponent;
  let fixture: ComponentFixture<MedicalConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalConfirmDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
