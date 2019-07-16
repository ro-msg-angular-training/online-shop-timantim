import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product : Product = new Product();

  constructor() { }

  ngOnInit() {
  }

  saveProduct() {
    
  }

}
