import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../_services/product.service';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product : Product;
  id : number;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService : CartService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
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
    $.notify({
      icon: "fa fa-info-circle",
      title: "Added to cart!",
      message: "You have successfully added " + this.product.name + " to your shopping cart!",
    });
  }
}
