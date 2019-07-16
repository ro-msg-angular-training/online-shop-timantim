import { Component, OnInit } from '@angular/core';
import { ProductHeader } from '../_models/product-header.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productHeaders : ProductHeader[] = [
    {id: 1, category: 'Lorem', name: 'Ipsum', price: 100},
    {id: 2, category: 'Lorem', name: 'Ipsum', price: 150},
    {id: 3, category: 'Lorem', name: 'Ipsum', price: 150},
    {id: 4, category: 'Lorem', name: 'Ipsum', price: 200},
    {id: 5, category: 'Lorem', name: 'Ipsum', price: 250},
  ]

  constructor() { }

  ngOnInit() {
  }

}
