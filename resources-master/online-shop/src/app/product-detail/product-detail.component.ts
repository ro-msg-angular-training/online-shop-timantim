import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product : Product;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: ProductService) { }

  ngOnInit() {
    /*
    let id = this.route.snapshot.paramMap.get('id');
    this.hero$ = this.service.getHero(id);
    */
  }

}
