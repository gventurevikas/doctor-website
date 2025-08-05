import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRichTextEditorComponent } from './medical-rich-text-editor.component';

describe('MedicalRichTextEditorComponent', () => {
  let component: MedicalRichTextEditorComponent;
  let fixture: ComponentFixture<MedicalRichTextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalRichTextEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalRichTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
