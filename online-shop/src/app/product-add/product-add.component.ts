import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../_services/product.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product : Product = new Product();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
  }

  saveProduct(product : Product) {
    this.productService.addProduct(product).subscribe()
    this.router.navigate(['..']);
  }

}
