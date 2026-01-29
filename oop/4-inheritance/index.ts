import { RegularCustomer } from './regular-customer';
import { PremiumCustomer } from './premium-customer';

const regularCustomer = new RegularCustomer('Bob');
const premiumCustomer = new PremiumCustomer('John');

console.log(`${regularCustomer.getCustomerInfo()} received ${regularCustomer.getDiscount()}% discount`);
console.log(`${premiumCustomer.getCustomerInfo()} received ${premiumCustomer.getDiscount()}% discount and ${premiumCustomer.getPremiumBenefits()}`);