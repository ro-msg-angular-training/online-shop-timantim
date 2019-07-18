import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../_services/product.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product : Product;
  id : number;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService : AuthenticationService,
    private productService: ProductService) { }

  ngOnInit() {
    if(this.authenticationService.isAdmin == false)
      this.router.navigate(['..']);
    this.id = +this.route.snapshot.paramMap.get('id');
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
