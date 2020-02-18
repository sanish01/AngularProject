import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Ham1Component } from './ham1/ham1.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { Ham2Component } from './ham2/ham2.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PastconnectionComponent} from './pastconnection/pastconnection.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import{ MyquestionsComponent } from './myquestions/myquestions.component';
import { RegisterwizardComponent} from './registerwizard/registerwizard.component';
import { WelcomewizardComponent} from './welcomewizard/welcomewizard.component';
import { WizardhamComponent} from './wizardham/wizardham.component';
import { WizardmainpageComponent } from './wizardmainpage/wizardmainpage.component';
import { WfeedbackComponent } from './wfeedback/wfeedback.component';
import { WizardpastconnectionComponent} from './wizardpastconnection/wizardpastconnection.component';
import {WpdComponent} from './wpd/wpd.component';
import { NotificationComponent } from './notification/notification.component'
import {MyanswersComponent } from './myanswers/myanswers.component'


const routes: Routes = [
  {path:'', redirectTo:'/homepage', pathMatch:'full'},
  {path: 'header', component: HeaderComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'ham1', component: Ham1Component },
  {path:'feedback', component: FeedbackComponent },
  {path:'ham2', component: Ham2Component},
  {path:'mainpage', component: MainpageComponent},
  {path:'pastconnection', component: PastconnectionComponent},
  {path:'person-detail', component:PersonDetailComponent},
  {path:'myquestions', component:MyquestionsComponent},
  {path:'registerwizard', component:RegisterwizardComponent},
  {path:'welcomewizard', component:WelcomewizardComponent},
  {path:'wizardham', component: WizardhamComponent},
  {path:'wizardmainpage', component:WizardmainpageComponent},
  {path:'wfeedback', component:WfeedbackComponent},
  {path:'wizardpastconnection', component:WizardpastconnectionComponent},
  {path:'wpd', component:WpdComponent},
  {path:'notification', component:NotificationComponent},
  {path:'myanswers', component:MyanswersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
