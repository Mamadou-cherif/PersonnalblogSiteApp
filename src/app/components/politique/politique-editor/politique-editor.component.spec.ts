import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiqueEditorComponent } from './politique-editor.component';

describe('PolitiqueEditorComponent', () => {
  let component: PolitiqueEditorComponent;
  let fixture: ComponentFixture<PolitiqueEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolitiqueEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolitiqueEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
