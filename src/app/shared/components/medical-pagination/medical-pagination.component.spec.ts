import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalPaginationComponent } from './medical-pagination.component';

describe('MedicalPaginationComponent', () => {
  let component: MedicalPaginationComponent;
  let fixture: ComponentFixture<MedicalPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
