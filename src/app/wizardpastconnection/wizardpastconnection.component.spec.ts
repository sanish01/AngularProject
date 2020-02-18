import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardpastconnectionComponent } from './wizardpastconnection.component';

describe('WizardpastconnectionComponent', () => {
  let component: WizardpastconnectionComponent;
  let fixture: ComponentFixture<WizardpastconnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardpastconnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardpastconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
