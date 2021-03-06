import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './_services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListTableComponent } from './product-list/product-list-table/product-list-table.component';
import { ProductDetailFieldsComponent } from './product-detail/product-detail-fields/product-detail-fields.component';
import { ProductDetailDeleteModalComponent } from './product-detail/product-detail-delete-modal/product-detail-delete-modal.component';
import { CartTableComponent } from './cart/cart-table/cart-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductFieldsComponent } from './product-fields/product-fields.component';
import { AuthGuard } from './_guards/auth.guard';
import { CartService } from './_services/cart.service';
import { OrderService } from './_services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    LoginComponent,
    CartComponent,
    ProductEditComponent,
    ProductAddComponent,
    ProductListTableComponent,
    ProductDetailFieldsComponent,
    ProductDetailDeleteModalComponent,
    CartTableComponent,
    PageNotFoundComponent,
    ProductFieldsComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService, CartService, OrderService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
