import { Customer } from './customer';

export class RegularCustomer extends Customer {
  constructor(name: string) {
    super(name);
  }

  getDiscount(): number {
    return 10;
  }
}