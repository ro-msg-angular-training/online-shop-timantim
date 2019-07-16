import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';


const routes: Routes = [
  {path: 'products',component: ProductListComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'product/:id/edit', component: ProductEditComponent},
  {path: 'products/new', component: ProductAddComponent},
  {path: 'cart', component: CartComponent},
  {path: '', redirectTo: 'products', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
