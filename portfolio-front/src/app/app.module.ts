import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// services
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// created components imports 
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BannerComponent } from './components/banner/banner.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
// review
import { DashboardComponent } from './components/dashboard/dashboard.component';
// ---

import { LoginComponent } from './components/login/login.component';

import { LogoutComponent } from './components/logout/logout.component';

import { Page404Component } from './components/page404/page404.component';

import { LoginmodalComponent } from './modals/loginmodal/loginmodal.component';
import { EditbannerComponent } from './modals/editbanner/editbanner.component';
import { DeleteComponent } from './modals/delete/delete.component';
import { EditpfpComponent } from './modals/editpfp/editpfp.component';
import { EditskillComponent } from './modals/editskill/editskill.component';
import { EditaboutComponent } from './modals/editabout/editabout.component';
import { EditprojectComponent } from './modals/editproject/editproject.component';
import { EditcourseComponent } from './modals/editcourse/editcourse.component';
import { EditjobComponent } from './modals/editjob/editjob.component';


@NgModule({
  declarations: [
    AppComponent,

    // imported components
    IndexComponent,
    NavbarComponent,
    NavigationComponent,
    BannerComponent,
    IntroductionComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    Page404Component,
    LoginComponent,
    LogoutComponent,
    // modals
    LoginmodalComponent,
    EditbannerComponent,
    DeleteComponent,
    EditpfpComponent,
    EditskillComponent,
    EditaboutComponent,
    EditprojectComponent,
    EditcourseComponent,
    EditjobComponent,
// quitar despues
    DashboardComponent,
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
