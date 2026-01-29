import { ProductDiscountAbstract } from './product-discount.abstract';

export class RegularProduct extends ProductDiscountAbstract {
  calculateDiscount(): number {
    return 0;
  }
}