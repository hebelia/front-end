import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNavigationComponent } from './components/page-navigation/page-navigation.component';
import { BannerComponent } from './components/banner/banner.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MyExperienceComponent } from './components/my-experience/my-experience.component';
import { MyEducationComponent } from './components/my-education/my-education.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { Page404Component } from './components/page404/page404.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNavigationComponent,
    BannerComponent,
    IntroductionComponent,
    AboutMeComponent,
    MyExperienceComponent,
    MyEducationComponent,
    MySkillsComponent,
    MyProjectsComponent,
    ErrorPageComponent,
    NavigationComponent,
    Page404Component,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
