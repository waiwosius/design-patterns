import { ProductDiscount } from './ProductDiscount';

export class RegularProduct extends ProductDiscount {
  calculateDiscount(): number {
    return 0;
  }
}