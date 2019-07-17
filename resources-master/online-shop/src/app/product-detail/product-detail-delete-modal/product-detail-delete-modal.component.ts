import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-product-detail-delete-modal',
  templateUrl: './product-detail-delete-modal.component.html',
  styleUrls: ['./product-detail-delete-modal.component.css']
})
export class ProductDetailDeleteModalComponent implements OnInit {
  @Input() product : Product;
  @Input() deleteProduct : Function;

  constructor() { }

  ngOnInit() {
  }

  doDelete(product : Product) {
    this.deleteProduct(product);
  }

}
