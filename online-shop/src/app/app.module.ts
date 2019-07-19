import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './core/services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListTableComponent } from './product-list/product-list-table/product-list-table.component';
import { ProductDetailFieldsComponent } from './product-detail/product-detail-fields/product-detail-fields.component';
import { ProductDetailDeleteModalComponent } from './product-detail/product-detail-delete-modal/product-detail-delete-modal.component';
import { CartTableComponent } from './cart/cart-table/cart-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductFieldsComponent } from './product-fields/product-fields.component';
import { AuthGuard } from './core/guards/auth.guard';
import { CartService } from './core/services/cart.service';
import { OrderService } from './core/services/order.service';
import { LoginFormComponent } from './login/login-form/login-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDividerModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import { ProductListMenuComponent } from './product-list/product-list-menu/product-list-menu.component';
import { CartEmptyWarningComponent } from './cart/cart-empty-warning/cart-empty-warning.component';
import { CartMenuComponent } from './cart/cart-menu/cart-menu.component';


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
    ProductFieldsComponent,
    LoginFormComponent,
    ProductListMenuComponent,
    CartEmptyWarningComponent,
    CartMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  providers: [ProductService, CartService, OrderService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
