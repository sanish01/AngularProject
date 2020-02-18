import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Ham1Component } from './ham1/ham1.component';
import { SigninComponent, NgbdModalContent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { Ham2Component } from './ham2/ham2.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Subheader2Component } from './subheader2/subheader2.component';
import { PastconnectionComponent } from './pastconnection/pastconnection.component';
import {ModalModule } from './modal';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { MyquestionsComponent } from './myquestions/myquestions.component';
import { RegisterwizardComponent } from './registerwizard/registerwizard.component';
import { WelcomewizardComponent } from './welcomewizard/welcomewizard.component';
import { WizardmainpageComponent } from './wizardmainpage/wizardmainpage.component';
import { WizardhamComponent } from './wizardham/wizardham.component';
import { WizardsubheaderComponent } from './wizardsubheader/wizardsubheader.component';
import { WfeedbackComponent } from './wfeedback/wfeedback.component';
import { WizardpastconnectionComponent } from './wizardpastconnection/wizardpastconnection.component';
import { WpdComponent } from './wpd/wpd.component';
import { NotificationComponent } from './notification/notification.component';
import { MyanswersComponent } from './myanswers/myanswers.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Ham1Component,
    SigninComponent,
    RegisterComponent,
    SubheaderComponent,
    WelcomeComponent,
    HomepageComponent,
    FeedbackComponent,
    Ham2Component,
    MainpageComponent,
    Subheader2Component,
    PastconnectionComponent,
    PersonDetailComponent,
    MyquestionsComponent,
    NgbdModalContent,
    RegisterwizardComponent,
    WelcomewizardComponent,
    WizardmainpageComponent,
    WizardhamComponent,
    WizardsubheaderComponent,
    WfeedbackComponent,
    WizardpastconnectionComponent,
    WpdComponent,
    NotificationComponent,
    MyanswersComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  entryComponents: [NgbdModalContent]
})
export class AppModule { }
