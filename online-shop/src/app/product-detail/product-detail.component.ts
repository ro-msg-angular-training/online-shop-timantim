import { Component, OnInit } from '@angular/core';
import { Product } from '../core/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../core/services/product.service';
import { CartService } from '../core/services/cart.service';
import { AuthenticationService } from '../core/services/authentication.service';
import * as $ from 'jquery';
import 'bootstrap-notify';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  id: number;
  isAdmin: boolean;
  isCustomer: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(this.id)
      .subscribe(
        product => this.product = product,
      );
  }

  deleteProduct() {
    this.productService.deleteProduct(this.id)
      .subscribe();
    this.router.navigateByUrl('/products');
  }

  addToCart() {
    this.cartService.addProduct(this.product)
    $[`notify`]({
      icon: "fa fa-info-circle",
      title: "Added to cart!",
      message: "You have successfully added " + this.product.name + " to your shopping cart!",
    }, { delay: 1000 });
  }
}
