import { ProductDiscountAbstract } from './product-discount.abstract';

export class DiscountedProduct extends ProductDiscountAbstract {
  calculateDiscount(): number {
    return this.price * 0.1;
  }
}