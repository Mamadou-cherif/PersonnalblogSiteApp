import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceEditorComponent } from './science-editor.component';

describe('ScienceEditorComponent', () => {
  let component: ScienceEditorComponent;
  let fixture: ComponentFixture<ScienceEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
