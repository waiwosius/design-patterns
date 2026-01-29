import { ProductAbstract } from './product.abstract';

export class DiscountedProduct extends ProductAbstract {
  constructor(title: string, price: number, private discountRate: number) {
    super(title, price);
  }

  calculatePrice(): number {
    return this.price * (1 - this.discountRate);
  }
}