import { Component, OnInit } from '@angular/core';
import { ProductHeader } from '../core/models/product-header.model';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../core/services/product.service';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit{

  productHeaders : ProductHeader[] = []
  private isAdmin : boolean;
  private isCustomer : boolean;

  constructor(private authenticationService : AuthenticationService,
      private productService : ProductService) { }  

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(
        productHeaders => this.productHeaders = productHeaders,
      );
    this.isAdmin = this.authenticationService.isAdmin;
    this.isCustomer = this.authenticationService.isCustomer;
  }

}
