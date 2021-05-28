import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  filtersForm: FormGroup;
  typesList = []
  sizesList = []
  colorsList = []

  constructor(private formbuilder: FormBuilder, private shoppingSer: ShoppingService) {
    this.filtersForm = this.formbuilder.group({
      type: [null],
      size: [null],
      color: [null],
      price: [null]
    })
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
  }


  onSelecteType(typeId: number): void {
    this.shoppingSer.productType.next(typeId);
  }

  onSelecteSize(sizeId: number): void{

  }

  onSelecteColor(colorId: number): void {

  }

}
