import { Product } from './Product';

export class ProductNewsletter {
  send(product: Product): void {
    console.log(`Buy ${product.title} now! Price now just ${product.getPrice()} EUR`);
  }
}