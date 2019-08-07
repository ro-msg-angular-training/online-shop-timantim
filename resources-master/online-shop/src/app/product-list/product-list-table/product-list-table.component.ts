import { Component, OnInit, Input } from '@angular/core';
import { ProductHeader } from 'src/app/_models/product-header.model';

@Component({
  selector: 'app-product-list-table',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list-table.component.css']
})
export class ProductListTableComponent implements OnInit {
  @Input() productHeaders : ProductHeader[]

  constructor() { }

  ngOnInit() {
  }

}
