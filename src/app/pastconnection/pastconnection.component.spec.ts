import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastconnectionComponent } from './pastconnection.component';

describe('PastconnectionComponent', () => {
  let component: PastconnectionComponent;
  let fixture: ComponentFixture<PastconnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastconnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
