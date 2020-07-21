import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicationEditorComponent } from './edication-editor.component';

describe('EdicationEditorComponent', () => {
  let component: EdicationEditorComponent;
  let fixture: ComponentFixture<EdicationEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicationEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
