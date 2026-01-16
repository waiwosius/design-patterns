import { ProductDiscount } from './ProductDiscount';

export class DamagedProduct extends ProductDiscount {
  constructor(title: string, price: number, private damageRate: number) {
    super(title, price);
  }

  calculateDiscount(): number {
    return this.price * this.damageRate;
  }
}