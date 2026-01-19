import { Product } from './Product';

export class RegularProduct extends Product {
  calculatePrice(): number {
    return this.price;
  }
}