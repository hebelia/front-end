import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// si estan correctamente creados deben generarse los imports de los distintos componentes
import{IndexComponent} from './components/index/index.component';
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

import{LoginComponent} from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
// comp final 
import { Page404Component } from './components/page404/page404.component';

// checkear despues



const routes: Routes = [

// ruta de inicio : entre comillas sin nada

{path: '', component : IndexComponent},

{path: 'navbar', component: NavbarComponent  },
{path: 'navigation', component: NavigationComponent },
{path: 'banner', component: BannerComponent }, 
{path: 'introduction', component: IntroductionComponent },
{path: 'about', component: AboutComponent },
{path:'experience', component: ExperienceComponent},
{path: 'education', component: EducationComponent },
{path: 'skills',component: SkillsComponent},
{path: 'projects',component: ProjectsComponent},
{path: 'footer', component: FooterComponent},



{path: 'login', component: LoginComponent},
{path: 'logout', component: LogoutComponent},

//   la ultima ruta debe ser la de error  !orden)
{path: '**', component : Page404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
