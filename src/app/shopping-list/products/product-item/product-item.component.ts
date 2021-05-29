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
  filteredObject: any;
  totalproducts: number;
    constructor(
      private shoppingListService: ShoppingService,
      private sharedService: SharedService
      ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getFilteringIds();
    this.shoppingListService.productsListSubject.subscribe(res => {
      this.products = res;
      this.totalproducts = res.length;
    })
  }

  getFilteredProducts() {
    const typeId = this.filteredObject.typeId == null ? 1 : this.filteredObject.typeId;
    const sizeId = this.filteredObject.sizeId === null ? 1 : this.filteredObject.sizeId;
    const colorId = this.filteredObject.sizeId === null ? 1 : this.filteredObject.colorId;
    this.shoppingListService.filteredProductsList(typeId, colorId, sizeId).subscribe(res => {
      this.products = res;
      this.totalproducts = res.length;
    });
  }

  getFilteringIds() {
    this.shoppingListService.filterproductSubject.subscribe( res => {
      this.filteredObject = res;
      this.getFilteredProducts();
    });
  }

  getProducts() {
    this.shoppingListService.getProductList().subscribe( res => {
      this.products = res;
      this.totalproducts = res.length;
    })
  }

}

