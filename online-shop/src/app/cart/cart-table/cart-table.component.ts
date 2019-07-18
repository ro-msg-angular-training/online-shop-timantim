import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/core/models/cart-item.model';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnInit {
  @Input() cartItems: CartItem[]
  @Output() incrementQuantity = new EventEmitter()
  @Output() decrementQuantity = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  incrementItemQuantity(cartItem: CartItem) {
    this.incrementQuantity.emit(cartItem);
  }

  decrementItemQuantity(cartItem: CartItem) {
    this.decrementQuantity.emit(cartItem); 
  }

}
