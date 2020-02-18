import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subheader2Component } from './subheader2.component';

describe('Subheader2Component', () => {
  let component: Subheader2Component;
  let fixture: ComponentFixture<Subheader2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subheader2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subheader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
