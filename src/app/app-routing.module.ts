import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path:'',
      loadChildren: () => import('./shopping-list/products.module')
      .then( m => m.ProductsModule ), data:{}
    },
    {path:"**", redirectTo:'products', pathMatch:"full"},

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
