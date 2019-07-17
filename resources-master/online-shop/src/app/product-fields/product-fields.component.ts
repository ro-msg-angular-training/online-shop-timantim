import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../_models/product.model';

@Component({
  selector: 'app-product-fields',
  templateUrl: './product-fields.component.html',
  styleUrls: ['./product-fields.component.css']
})
export class ProductFieldsComponent implements OnInit {
  @Input() product : Product;
  @Input() saveProduct : Function;
  
  constructor() { }

  ngOnInit() {
  }

  doSave(product : Product) {
    this.saveProduct(product);
  }

}
