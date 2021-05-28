import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './_shared/shared.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ProductsComponent } from './shopping-list/products/products.component';
import { FiltersComponent } from './shopping-list//filters/filters.component';
import { ProductItemComponent } from './shopping-list/products/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from './shopping-list/products/product-item/star-rating/star-rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ProductsComponent,
    FiltersComponent,
    ProductItemComponent,
    StarRatingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
