import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../_services/product.service';

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
    private productService: ProductService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.id)
      .subscribe(
        product => this.product = product,
      );
  }

  addProduct() {
    //this.product.name = name;
    //this.product.category = category;
    //this.product.image = image;
    //this.productService.addProduct()
  }

}
