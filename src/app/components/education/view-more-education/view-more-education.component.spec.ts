import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoreEducationComponent } from './view-more-education.component';

describe('ViewMoreEducationComponent', () => {
  let component: ViewMoreEducationComponent;
  let fixture: ComponentFixture<ViewMoreEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMoreEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMoreEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
