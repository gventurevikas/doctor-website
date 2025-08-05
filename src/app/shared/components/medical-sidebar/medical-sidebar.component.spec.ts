import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalSidebarComponent } from './medical-sidebar.component';

describe('MedicalSidebarComponent', () => {
  let component: MedicalSidebarComponent;
  let fixture: ComponentFixture<MedicalSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
