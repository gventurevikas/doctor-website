import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalErrorComponent } from './medical-error.component';

describe('MedicalErrorComponent', () => {
  let component: MedicalErrorComponent;
  let fixture: ComponentFixture<MedicalErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
