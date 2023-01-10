import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/index/index.component';

import { LoginmodalComponent } from './modals/loginmodal/loginmodal.component';

import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: '', component: IndexComponent },

  { path: 'loginmodal', component: LoginmodalComponent },

  //any other route will redirect to error page
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
