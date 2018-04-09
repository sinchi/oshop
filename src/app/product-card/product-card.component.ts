import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {

  @Input('product') product;
  @Input('showActions') showActions = true;
  constructor(private cartService: ShoppingCartService) { }


  addToCart(product: Product) {
    this.cartService.create();
  }
}
