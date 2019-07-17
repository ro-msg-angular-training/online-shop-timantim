import { Injectable } from '@angular/core';
import { Product } from '../_models/product.model';
import { CartItem } from '../_models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems : CartItem[] = []

  constructor() { 
    this.loadFromStorage()
  }

  getCartItems() : CartItem[] {
    return this.cartItems
  }

  addProduct(product : Product) {
    if(this.checkIfExists(product))
    {
      this.incrementCartProduct(product)
    }
    else
    {
      this.cartItems.push(this.newCartItem(product))
    } 
    this.saveToStorage()
  }

  newCartItem(product : Product) : CartItem {
    let cartItem : CartItem = { product : product, quantity : 1}
    return cartItem
  }

  isEmpty(){
    return this.cartItems.length > 0
  }

  checkIfExists(product : Product){
    return this.cartItems.findIndex(x => x.product.id == product.id) !== -1
  }

  incrementCartProduct(product : Product) {
    this.findCartItemByProductId(product.id).quantity += 1
    this.saveToStorage()
  }

  decrementCartProduct(product : Product) {
    let item = this.findCartItemByProductId(product.id)
    item.quantity -= 1
    if(item.quantity < 1)
      this.removeItemFromCart(item)
    this.saveToStorage()
  }

  incrementCartItem(cartItem : CartItem) {
    this.findCartItemByProductId(cartItem.product.id).quantity += 1
    this.saveToStorage()
  }

  decrementCartItem(cartItem : CartItem) {
    let item = this.findCartItemByProductId(cartItem.product.id)
    item.quantity -= 1
    if(item.quantity < 1)
      this.removeItemFromCart(item)
    this.saveToStorage()
  }

  findCartItemByProductId(productId : number) : CartItem {
    return this.cartItems.find(x => x.product.id == productId)
  }

  removeItemFromCart(cartItem : CartItem) {
    this.cartItems.splice(this.cartItems.indexOf(cartItem), 1)
  }

  clearCart() {
    for(var i = 0; i< this.cartItems.length; i++) this.cartItems.pop();
  }

  // TODO: Make this work 
  saveToStorage() {
    localStorage.setItem("cart", JSON.stringify(this.cartItems))
  }

  loadFromStorage() {
    return JSON.parse(localStorage.getItem("cart"))
  }

}
