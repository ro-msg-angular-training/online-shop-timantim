import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-empty-warning',
  template: '<div class="alert alert-warning" role="alert">Cart is empty!</div>'
})
export class CartEmptyWarningComponent {

  constructor() { }

}
