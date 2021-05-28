import { Injectable } from "@angular/core";
import {  Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ShoppingService {

  productType = new Subject<any> ();
  productTypeSubject = this.productType.asObservable();

  url = 'http://localhost:3000'
  constructor(private http: HttpClient ) {}

  filteredProductsList(typeId?: number): Observable<any> {
    return this.http.get<any>(`${this.url}/products?typeId=${typeId}`);
  }

  getProductList(): Observable<any> {
    return this.http.get<any>(`${this.url}/products`);
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
