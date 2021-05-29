import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  typesList = [];
  sizesList = [];
  colorsList = [];

  filterObject: any;

  constructor(private shoppingSer: ShoppingService) {

   }

  ngOnInit(): void {

    this.shoppingSer.getTypes().subscribe( res => {
      this.typesList = res;
    });

    this.shoppingSer.getSizes().subscribe( res => {
      this.sizesList = res;
    });

    this.shoppingSer.getColors().subscribe( res => {
      this.colorsList = res;
    });

      this.initializeSearch();
  }

  filterObjValue(filterObj) {
    this.shoppingSer.filterproduct.next(filterObj)
  }

  getAllProducts() {
    this.shoppingSer.getProductList().subscribe( res => {
      this.shoppingSer.productsList.next(res)
    })
  }

  initializeSearch(){
    this.filterObject = {
      typeId: null,
      colorId: null,
      sizeId: null,
    }
  }

}
