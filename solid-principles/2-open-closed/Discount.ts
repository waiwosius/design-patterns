import { Customer } from './Customer';

export class Discount {
  giveDiscount(customer: Customer): number {
    return customer.giveDiscount();
  }
}