import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalLoadingComponent } from './medical-loading.component';

describe('MedicalLoadingComponent', () => {
  let component: MedicalLoadingComponent;
  let fixture: ComponentFixture<MedicalLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
