import { Component, OnChanges, OnInit } from '@angular/core';
import { ShoppingListService } from './../../services/shopping-list.service';
import { SharedService } from './../../../_shared/services/shared.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit  {
  products= [];
  productFilteredList= []
  categoryId: number;  
    constructor(
      private shoppingListService: ShoppingListService,
      private sharedService: SharedService
      ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCatId();
  }

  getProducts() {
    this.shoppingListService.getProducts().subscribe(res => {
      this.products = res;
    });
  }

  getCatId() {
    this.sharedService.currentCat_id.subscribe(res => {
      this.categoryId = res;
      console.log(this.categoryId);
      this.productFilteredList = this.products
                                  .filter((product) => product.categoryId === this.categoryId);
      this.products = this.productFilteredList; 
      console.log(this.products);    
    });
  }

  // filterProducts() {
  //   this.products.filter( res  => {
  //     res.categoryId == this.categoryId;
  //     console.log(this.products);
  //   });
  // }

 

}

