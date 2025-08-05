import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalFileUploadComponent } from './medical-file-upload.component';

describe('MedicalFileUploadComponent', () => {
  let component: MedicalFileUploadComponent;
  let fixture: ComponentFixture<MedicalFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalFileUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
