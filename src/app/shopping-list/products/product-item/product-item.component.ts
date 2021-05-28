import { Component, OnChanges, OnInit } from '@angular/core';
import { ShoppingService } from '../../services/shopping.service';
import { SharedService } from './../../../_shared/services/shared.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit  {
  products= [];
  productFilteredList= []
  typeId: number;
    constructor(
      private shoppingListService: ShoppingService,
      private sharedService: SharedService
      ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getFilteringIds();
  }

  getFilteredProducts() {
    this.shoppingListService.filteredProductsList(this.typeId).subscribe(res => {
      this.products = res;
    });
  }

  getFilteringIds() {
    this.shoppingListService.productTypeSubject.subscribe( res => {
      this.typeId = res
      this.getFilteredProducts();
      console.log(this.typeId);
    });
  }

  // getCatId() {
  //   this.sharedService.currentCat_id.subscribe(res => {
  //     this.categoryId = res;
  //     this.getProducts();
  //     console.log(this.categoryId);
  //     this.productFilteredList = this.products.filter((product) => product.categoryId === this.categoryId);
  //     this.products = this.productFilteredList;
  //     console.log(this.products);
  //   });
  // }

  // filterProducts() {
  //   this.products.filter( res  => {
  //     res.categoryId == this.categoryId;
  //     console.log(this.products);
  //   });
  // }

  getProducts() {
    this.shoppingListService.getProductList().subscribe( res => {
      this.products = res;
    })
  }

}

