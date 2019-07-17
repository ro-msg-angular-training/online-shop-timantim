import { Component, OnInit, Input, Output } from '@angular/core';
import { CartItem } from 'src/app/_models/cart-item.model';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnInit {
  @Input() cartItems : CartItem[] 
  @Input() incrementQuantity : Function
  @Input() decrementQuantity : Function

  constructor() { }

  ngOnInit() {
  }

  incrementItemQuantity(cartItem : CartItem) {
    this.incrementQuantity(cartItem);
  }

  decrementItemQuantity(cartItem : CartItem) {
    this.decrementQuantity(cartItem);
  }

}
