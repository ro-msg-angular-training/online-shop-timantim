import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { CartItem } from '../_models/cart-item.model';
import { OrderService } from '../_services/order.service';
import { Order } from '../_models/order.model';
import { AuthenticationService } from '../_services/authentication.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems : CartItem[]

  constructor(private cartService : CartService,
        private authenticationService : AuthenticationService,
        private orderService : OrderService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems()
  }

  incrementQuantity(cartItem : CartItem){
    this.cartService.incrementCartItem(cartItem);
  }

  decrementQuantity(cartItem : CartItem){
    this.cartService.decrementCartItem(cartItem);
  }

  checkout() {
    if(this.cartService.isEmpty() == true)
      {
        let customer : string = this.authenticationService.currentUser.username
        let products = this.cartItems
        let order : Order = { customer, products }
        this.orderService.createOrder(order)
        .pipe(first())
        .subscribe(
            data => {
              this.cartService.clearCart();
              $.notify({
                icon: "fa fa-info-circle",
                title: "Order created!",
                message: "You have successfully created an order!",
              }, { type: "success", delay: 1000});
            },
            error => {
              $.notify({
                icon: "fa fa-info-circle",
                title: "Order creation failed!",
                message: "Order could not be created!",
              }, { type: "danger", delay: 1000});
            });
      }
    else
      {
        $.notify({
          icon: "fa fa-info-circle",
          title: "Order creation failed!",
          message: "You don't have any products in your cart!",
        }, { type: "danger", delay: 1000},
        );
      }
  }

}
