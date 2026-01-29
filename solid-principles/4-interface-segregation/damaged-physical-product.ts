import { Discountable, Shippable } from './interfaces';

export class DamagedPhysicalProduct implements Discountable, Shippable {
  constructor(public title: string, public price: number, private damageRate: number) {
  }

  calculateDiscount(): number {
    return this.price * this.damageRate;
  }

  ship(): void {
    console.log(`Shipping damaged ${this.title}...`);
  }
}