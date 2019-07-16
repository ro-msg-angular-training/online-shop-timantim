import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-product-detail-fields',
  templateUrl: './product-detail-fields.component.html',
  styleUrls: ['./product-detail-fields.component.css']
})
export class ProductDetailFieldsComponent implements OnInit {

  @Input() product : Product;

  constructor() { }

  ngOnInit() {
  }

}
