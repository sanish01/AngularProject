import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ham2Component } from './ham2.component';

describe('Ham2Component', () => {
  let component: Ham2Component;
  let fixture: ComponentFixture<Ham2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ham2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ham2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
