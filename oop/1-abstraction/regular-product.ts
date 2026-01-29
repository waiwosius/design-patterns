import { ProductAbstract } from './product.abstract';

export class RegularProduct extends ProductAbstract {
  calculatePrice(): number {
    return this.price;
  }
}