import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardmainpageComponent } from './wizardmainpage.component';

describe('WizardmainpageComponent', () => {
  let component: WizardmainpageComponent;
  let fixture: ComponentFixture<WizardmainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardmainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
