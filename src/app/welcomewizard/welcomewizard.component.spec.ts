import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomewizardComponent } from './welcomewizard.component';

describe('WelcomewizardComponent', () => {
  let component: WelcomewizardComponent;
  let fixture: ComponentFixture<WelcomewizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomewizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomewizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
