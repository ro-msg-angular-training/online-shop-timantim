import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ProductHeader } from '../_models/product-header.model';
import * as _ from 'lodash';
import { Product } from '../_models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productURL = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) { }

  getProducts() : Observable<ProductHeader[]>{
    return this.httpClient
      .get<Array<ProductHeader>>(this.productURL);
  }

  getProduct(id : number) : Observable<Product> {
    return this.httpClient
      .get<Product>(this.productURL + '/' + id);
  }

  addProduct(product : Product) : Observable<Product> {
    return this.httpClient
      .post<Product>(this.productURL, product);
  }

  updateProduct(id : number, product : Product) : Observable<Product> {
    return this.httpClient
      .put<Product>(this.productURL + '/' + id, product);
  }

  deleteProduct(id : number) : Observable<{}> {
    return this.httpClient 
      .delete(this.productURL);
  }

}
