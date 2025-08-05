import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalTooltipComponent } from './medical-tooltip.component';

describe('MedicalTooltipComponent', () => {
  let component: MedicalTooltipComponent;
  let fixture: ComponentFixture<MedicalTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalTooltipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
