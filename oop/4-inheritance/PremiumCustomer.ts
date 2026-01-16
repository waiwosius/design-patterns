import { Customer } from './Customer';

export class PremiumCustomer extends Customer {
  constructor(name: string) {
    super(name);
  }

  getDiscount(): number {
    return 20;
  }

  getPremiumBenefits(): string {
    return 'Premium benefits (Free shipping, priority support)';
  }
}