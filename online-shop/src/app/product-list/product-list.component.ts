import { Component, OnInit } from '@angular/core';
import { ProductHeader } from '../core/models/product-header.model';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../core/services/product.service';
import { AuthenticationService } from '../core/services/authentication.service';
import { CartService } from '../core/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  productHeaders: ProductHeader[] = []
  user$: Observable<any>;
  isAdmin: boolean;
  isCustomer: boolean;

  constructor(private authenticationService : AuthenticationService,
    private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(
        productHeaders => this.productHeaders = productHeaders,
      );
  }

}
