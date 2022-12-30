import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// si estan correctamente creados deben generarse los imports de los distintos componentes
import{IndexComponent} from './components/index/index.component';


// review
import {LoginmodalComponent} from './modals/loginmodal/loginmodal.component';

import { EditprojectComponent } from './modals/editproject/editproject.component';
import { EditskillComponent } from './modals/editskill/editskill.component';
import { EditprofileComponent } from './modals/editprofile/editprofile.component';
import { EditjobComponent } from './modals/editjob/editjob.component';
import { EditcourseComponent } from './modals/editcourse/editcourse.component';
// comp final 
import { Page404Component } from './components/page404/page404.component';




const routes: Routes = [

// ruta de inicio : entre comillas sin nada
{path: '', component : IndexComponent},

// review
{path: 'loginmodal', component: LoginmodalComponent},

//   la ultima ruta debe ser la de error  !orden)
{path: '**', component : Page404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
