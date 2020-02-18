import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ham1Component } from './ham1.component';

describe('Ham1Component', () => {
  let component: Ham1Component;
  let fixture: ComponentFixture<Ham1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ham1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ham1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
