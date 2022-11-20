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
    MyProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
