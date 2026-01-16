import { ProductDiscount } from './ProductDiscount';

export class DiscountedProduct extends ProductDiscount {
  calculateDiscount(): number {
    return this.price * 0.1;
  }
}