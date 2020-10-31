import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './../services/shopping-list.service';
import { SharedService } from './../../_shared/services/shared.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  shoppingCategories= []
  categoryId:number;

  constructor( 
    private shoppingList: ShoppingListService,
    private sharedService: SharedService
     ) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.shoppingList.getCategories().subscribe(res => {
      this.shoppingCategories = res;
      console.log(this.shoppingCategories);
      
    })
  }

  getCatId(id) {
    this.sharedService.changeCatId(id)
    this.categoryId = id;    
  }

}
