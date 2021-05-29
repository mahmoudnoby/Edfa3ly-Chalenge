import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { ProductsComponent } from './products/products.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { StarRatingComponent } from './products/product-item/star-rating/star-rating.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './products/product-details/product-details.component';



@NgModule({
  declarations: [
    ShoppingListComponent,
    ProductsComponent,
    FiltersComponent,
    ProductItemComponent,
    StarRatingComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    RouterModule.forChild([
      {path: 'products' , component: ShoppingListComponent},
      {path: 'products/:id' , component: ProductDetailsComponent},
      {path: '', redirectTo: "products", pathMatch:'full'}

    ])
  ]
})
export class ProductsModule { }
