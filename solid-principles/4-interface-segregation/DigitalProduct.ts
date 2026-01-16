import { Discountable, Downloadable } from './interfaces';

export class DigitalProduct implements Discountable, Downloadable {
  constructor(public title: string, public price: number) {
  }

  calculateDiscount(): number {
    return this.price * 0.1;
  }

  download(): void {
    console.log(`Downloading ${this.title}...`);
  }
}