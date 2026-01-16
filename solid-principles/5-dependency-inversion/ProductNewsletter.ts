import { Notification } from './Notification';
import { Product } from '../1-single-responsibility/Product';

export class ProductNewsletter {
  constructor(private notification: Notification) {
  }

  send(product: Product) {
    const message = `Buy ${product.title} now for ${product.getPrice()}!`;
    this.notification.send(message);
  }
}