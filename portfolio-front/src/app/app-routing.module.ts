import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// si estan correctamente creados deben generarse los imports de los distintos componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { Page404Component } from './components/page404/page404.component';
// checkear despues
// import{ index-component} from '.components/index/index.component';
// import {error-page} from '.components./error-page/error-page.component';


const routes: Routes = [

// ruta de inicio : entre comillas sin nada

  // {path: '', component : index-component},

{path: 'navbar', component: NavbarComponent  },
{path: 'navigation', component: NavigationComponent },
{path: 'banner', component: BannerComponent }, 
{path: 'introduction', component: IntroductionComponent },
{path: 'about', component: AboutComponent },
{path:'experience', component: ExperienceComponent},
{path: 'education', component: EducationComponent },
{path: 'skills',component: SkillsComponent},
{path: 'projects',component: ProjectsComponent},

  // la ultima ruta debe ser la de error (la importancia del orden)
   {path: '**', component : Page404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
