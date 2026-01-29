import { Discountable, Shippable } from './interfaces';

export class PhysicalProduct implements Discountable, Shippable {
  constructor(public title: string, public price: number) {
  }

  calculateDiscount(): number {
    return this.price * 0.1;
  }

  ship(): void {
    console.log(`Shipping ${this.title}...`);
  }
}