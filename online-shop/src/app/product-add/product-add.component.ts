import { Component, OnInit } from '@angular/core';
import { Product } from '../core/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

  product: Product = new Product();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  saveProduct(product: Product) {
    this.productService.addProduct(product).subscribe()
    this.router.navigate(['..']);
  }

}
