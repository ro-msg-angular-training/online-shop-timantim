import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    {category: 'a', name: 'a', price: 99}
  ]

  constructor() { }

  ngOnInit() {
  }

}
