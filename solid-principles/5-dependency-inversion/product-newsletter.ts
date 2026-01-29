import { Notification } from './notification.interface';
import { Product } from '../1-single-responsibility/product';

export class ProductNewsletter {
  constructor(private notification: Notification) {
  }

  send(product: Product) {
    const message = `Buy ${product.title} now for ${product.getPrice()}!`;
    this.notification.send(message);
  }
}