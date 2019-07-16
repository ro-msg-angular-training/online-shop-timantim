import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail-delete-modal',
  templateUrl: './product-detail-delete-modal.component.html',
  styleUrls: ['./product-detail-delete-modal.component.css']
})
export class ProductDetailDeleteModalComponent implements OnInit {
  @Input() productname : string;

  constructor() { }

  ngOnInit() {
  }

}
