import { Component, OnInit } from '@angular/core';
import { Product } from '../core/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit {
  product : Product;
  id : number;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(this.id)
      .subscribe(
        product => this.product = product,
      );
  }

  saveProduct(product : Product) {
    this.productService.updateProduct(product).subscribe()
    this.router.navigate(['..']);
  }

}
