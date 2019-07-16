import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../_services/product.service';
import { $ } from 'protractor';

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
    private productService: ProductService) { }

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
}
