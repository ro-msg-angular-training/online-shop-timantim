import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { CartItem } from '../_models/cart-item.model';
import { OrderService } from '../_services/order.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems : CartItem[]

  constructor(private cartService : CartService,
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
        // todo: create order and call service
        // todo: show message that the order was filled
        this.cartService.clearCart();
        $.notify({
          icon: "fa fa-info-circle",
          title: "Order created!",
          message: "You have successfully created an order!",
        }, { type: "success"},
        );
      }
    else
      {
        $.notify({
          icon: "fa fa-info-circle",
          title: "Order creation failed!",
          message: "You don't have any products in your cart!",
        }, { type: "danger"},
        );
      }
  }

}
