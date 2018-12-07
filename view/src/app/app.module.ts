import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MatButtonModule} from '@angular/material';
import { ModalModule} from 'ngx-bootstrap';
import {NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app.routing.module';
import { LandingPageComponent } from './Components/Landing-Page/landing-page/landing-page.component';
import { HeaderComponent } from './Components/Common-Components/header/header.component';
import { JobApplyComponent } from './Components/Job-Apply/job-apply/job-apply.component';
import { RegistrationComponent } from './Components/Registration/registration/registration.component';
import { SignInComponent } from './Components/Sign-In/sign-in/sign-in.component';
import { ModelJobApplyComponent } from './Models/Job-Apply/model-job-apply/model-job-apply.component';
import { JobPostComponent } from './Components/Job-Post/job-post/job-post.component';
import { JobSeekerRegistrationComponent } from './Components/Registration/Job-Seeker-Registration/job-seeker-registration/job-seeker-registration.component';
import { EmployerRegistrationComponent } from './Components/Registration/Employer-Registration/employer-registration/employer-registration.component';
import { JobSearchPageComponent } from './Components/Job-Search-Page/job-search-page/job-search-page.component';
import { CompanyProfileComponent } from './Components/Company-Profile/company-profile/company-profile.component';
import { EmployerSignInComponent } from './Components/Sign-In/Employer_Sign_In/employer-sign-in/employer-sign-in.component';
import { CompanyListComponent } from './Components/Company-Profile/Company-List/company-list/company-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
   HeaderComponent,
   JobApplyComponent,
   RegistrationComponent,
   SignInComponent,
   ModelJobApplyComponent,
   JobPostComponent,
   JobSeekerRegistrationComponent,
   EmployerRegistrationComponent,
   JobSearchPageComponent,
   CompanyProfileComponent,
   EmployerSignInComponent,
   CompanyListComponent,
  ],
  imports: [
      BrowserModule,
      RouterModule,
      MatButtonModule,
      ModalModule.forRoot(),
      AppRoutingModule,
      NgSelectModule
  ],
  providers: [],
  entryComponents: [ModelJobApplyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
