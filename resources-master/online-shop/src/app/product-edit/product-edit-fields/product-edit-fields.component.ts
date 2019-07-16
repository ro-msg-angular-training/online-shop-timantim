import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-product-edit-fields',
  templateUrl: './product-edit-fields.component.html',
  styleUrls: ['./product-edit-fields.component.css']
})
export class ProductEditFieldsComponent implements OnInit {
  @Input() product : Product;
  @Output() newProduct : EventEmitter = new EventEmitter;
  
  constructor() { }

  ngOnInit() {
  }

  doEdit() {
    this.product.name = name;
    this.product.category = category;
    this.product.image = image;
    this.product.price = price;
  }

}
