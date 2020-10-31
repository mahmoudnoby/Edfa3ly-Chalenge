import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path:'',
      loadChildren: () => import('./_shared/shared.module')
      .then( m => m.SharedModule ), data:{}
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
