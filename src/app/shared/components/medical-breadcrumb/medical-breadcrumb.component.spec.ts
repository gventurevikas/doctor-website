import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalBreadcrumbComponent } from './medical-breadcrumb.component';

describe('MedicalBreadcrumbComponent', () => {
  let component: MedicalBreadcrumbComponent;
  let fixture: ComponentFixture<MedicalBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalBreadcrumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
