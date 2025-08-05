import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalLayoutComponent } from './medical-layout.component';

describe('MedicalLayoutComponent', () => {
  let component: MedicalLayoutComponent;
  let fixture: ComponentFixture<MedicalLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
