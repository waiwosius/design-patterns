import { Customer } from './Customer';

export class RegularCustomer extends Customer {
  constructor(name: string) {
    super(name);
  }

  getDiscount(): number {
    return 10;
  }
}