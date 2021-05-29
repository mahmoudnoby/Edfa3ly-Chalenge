import { Injectable } from "@angular/core";
import {  Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ShoppingService {

  filterproduct = new Subject<any> ();
  filterproductSubject = this.filterproduct.asObservable();
  productsList = new Subject<any> ();
  productsListSubject = this.productsList.asObservable();


  url = 'http://localhost:3000'
  constructor(private http: HttpClient ) {}

  filteredProductsList(typeId=1, colorId=1, sizeId=1 ): Observable<any> {
    return this.http.get<any>(`${this.url}/products?typeId=${typeId}&colorId=${colorId}&sizeId=${sizeId}`);
  }

  getProductList(): Observable<any> {
    return this.http.get<any>(`${this.url}/products`);
  }
  getProductdetails(id:number): Observable<any> {
    return this.http.get<any>(`${this.url}/products/${id}`);
  }

  getTypes(): Observable<any> {
    return this.http.get<any>(`${this.url}/types`)
  }

  getSizes(): Observable<any> {
    return this.http.get<any>(`${this.url}/sizes`)
  }

  getColors(): Observable<any> {
    return this.http.get<any>(`${this.url}/colors`)
  }




}
