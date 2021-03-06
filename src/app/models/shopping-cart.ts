import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart {

  items: ShoppingCartItem[] = [];

  constructor(private itemsMap: {[productId: string]: ShoppingCartItem}) {
    this.itemsMap = itemsMap || {};
    // tslint:disable-next-line:forin
    for (const productId in itemsMap) {
      const item = itemsMap[productId];
      const x = new ShoppingCartItem({ ...item, $key: productId });

      this.items.push(x);
    }
  }

  getQuantity(product: Product) {
    const item = this.itemsMap[product.$key];
    return item ? item.quantity : 0;
  }

  get totalPrice() {
    let sum = 0;
    // tslint:disable-next-line:forin
    for (const productid in this.items) {
      sum += this.items[productid].totalPrice;
    }

    return sum;
  }

  get totalItemsCount() {
    let count = 0;
      // tslint:disable-next-line:forin
      for (const productId in this.items) {
        count += this.items[productId].quantity;
      }

      return count;
  }

}
