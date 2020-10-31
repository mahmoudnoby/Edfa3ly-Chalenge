import { Injectable } from "@angular/core";
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {

  

  url = 'http://test-api.edfa3ly.io'
  constructor(private http: HttpClient ) {}
  getCategories(): Observable<any> {
    return this.http.get(`${this.url}/category`);
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.url}/product`)
  }

}
