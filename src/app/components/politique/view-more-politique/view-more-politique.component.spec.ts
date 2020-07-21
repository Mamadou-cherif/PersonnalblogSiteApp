import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMorePolitiqueComponent } from './view-more-politique.component';

describe('ViewMorePolitiqueComponent', () => {
  let component: ViewMorePolitiqueComponent;
  let fixture: ComponentFixture<ViewMorePolitiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMorePolitiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMorePolitiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
