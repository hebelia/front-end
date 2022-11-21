import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// created components imports 
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BannerComponent } from './components/banner/banner.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { Page404Component } from './components/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,

    // imported components
    NavbarComponent,
    NavigationComponent,
    BannerComponent,
    IntroductionComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    Page404Component


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
