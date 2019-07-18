import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Order } from '../_models/order.model';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderURL = "http://localhost:3000/orders";

  constructor(private httpClient: HttpClient) { }

  addProduct(order : Order) : Observable<Order> {
    return this.httpClient
      .post<Order>(this.orderURL, order);
  }

}
