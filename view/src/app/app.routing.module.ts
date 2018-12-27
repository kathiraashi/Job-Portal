import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './Components/Common-Components/header/header.component';
import { LandingPageComponent } from './Components/Landing-Page/landing-page/landing-page.component';
import { JobApplyComponent } from './Components/Job-Apply/job-apply/job-apply.component';
import { RegistrationComponent } from './Components/Registration/registration/registration.component';
import { SignInComponent } from './Components/Sign-In/sign-in/sign-in.component';
import { JobPostComponent } from './Components/Job-Post/job-post/job-post.component';
import { JobSeekerRegistrationComponent } from './Components/Registration/Job-Seeker-Registration/job-seeker-registration/job-seeker-registration.component';
import { EmployerRegistrationComponent } from './Components/Registration/Employer-Registration/employer-registration/employer-registration.component';
import { JobSearchPageComponent } from './Components/Job-Search-Page/job-search-page/job-search-page.component';
import { CompanyProfileComponent } from './Components/Company-Profile/company-profile/company-profile.component';
import { CompanyListComponent } from './Components/Company-Profile/Company-List/company-list/company-list.component';
import { EmployerSignInComponent } from './Components/Sign-In/Employer_Sign_In/employer-sign-in/employer-sign-in.component';


const appRoutes: Routes = [
   {
      path: '',
      component: LandingPageComponent,
      data: { animation: { value: 'landing_page'}  }
   },
   {
      path: 'landing_page',
      component: LandingPageComponent,
      data: { animation: { value: 'landing_page'}  }
   },
   {
      path: 'Job_View/:job_id',
      component: JobApplyComponent,
      data: { animation: { value: 'Job_View'}  }
   },
   {
      path: 'registration',
      component: RegistrationComponent,
      data: { animation: { value: 'registration'}  }
   },
   {
      path: 'job_seeker_registration',
      component: JobSeekerRegistrationComponent,
      data: { animation: { value: 'job_seeker_registration'}  }
   },
   {
      path: 'Employer_Registration',
      component: EmployerRegistrationComponent,
      data: { animation: { value: 'Employer_Registration'}  }
   },
   {
      path: 'Job_Seeker_sign_In',
      component: SignInComponent,
      data: { animation: { value: 'Job_Seeker_sign_In'}  }
   },
   {
      path: 'Employer_sign_In',
      component: EmployerSignInComponent,
      data: { animation: { value: 'Employer_sign_In'}  }
   },
   {
      path: 'Job_Post',
      component: JobPostComponent,
      data: { animation: { value: 'Job_Post'}  }
   },
   {
      path: 'Job_Search',
      component: JobSearchPageComponent,
      data: { animation: { value: 'Job_Search'}  }
   },
   {
      path: 'Company_Profile/:Company_Id',
      component: CompanyProfileComponent,
      data: { animation: { value: 'Company_Profile'}  }
   },
   {
      path: 'Company_List',
      component: CompanyListComponent,
      data: { animation: { value: 'Company_List'}  }
   },
];

@NgModule({
   declarations: [ ],
   imports: [ RouterModule.forRoot(appRoutes,
       { enableTracing: true }
     )],
   providers: [],
   bootstrap: []
 })
 export class AppRoutingModule { }
