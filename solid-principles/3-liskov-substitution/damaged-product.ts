import { ProductDiscountAbstract } from './product-discount.abstract';

export class DamagedProduct extends ProductDiscountAbstract {
  constructor(title: string, price: number, private damageRate: number) {
    super(title, price);
  }

  calculateDiscount(): number {
    return this.price * this.damageRate;
  }
}