import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingService } from '../../services/shopping.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  proudctdetails: any;
  constructor(private activatedRoute: ActivatedRoute, private shoppingServ: ShoppingService) {
    this.activatedRoute.params.subscribe(res => {
      let productId = res.id;
      console.log(productId);
      this.shoppingServ.getProductdetails(productId).subscribe(
        res =>{
          this.proudctdetails = res;
          console.log(this.proudctdetails);

         },
        error => {},
        () => {}
      )
    }
     )
   }

  ngOnInit(): void {
  }

}
