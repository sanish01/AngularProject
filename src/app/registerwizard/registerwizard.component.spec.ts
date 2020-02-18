import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterwizardComponent } from './registerwizard.component';

describe('RegisterwizardComponent', () => {
  let component: RegisterwizardComponent;
  let fixture: ComponentFixture<RegisterwizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterwizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterwizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
