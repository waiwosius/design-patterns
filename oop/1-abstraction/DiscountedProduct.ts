import { Product } from './Product';

export class DiscountedProduct extends Product {
  constructor(title: string, price: number, private discountRate: number) {
    super(title, price);
  }

  calculatePrice(): number {
    return this.price * (1 - this.discountRate);
  }
}