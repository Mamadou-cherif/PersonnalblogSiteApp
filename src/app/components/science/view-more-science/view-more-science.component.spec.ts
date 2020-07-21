import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoreScienceComponent } from './view-more-science.component';

describe('ViewMoreScienceComponent', () => {
  let component: ViewMoreScienceComponent;
  let fixture: ComponentFixture<ViewMoreScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMoreScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMoreScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
