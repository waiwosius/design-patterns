import { RegularCustomer } from './RegularCustomer';
import { PremiumCustomer } from './PremiumCustomer';

const regularCustomer = new RegularCustomer('Bob');
const premiumCustomer = new PremiumCustomer('John');

console.log(`${regularCustomer.getCustomerInfo()} received ${regularCustomer.getDiscount()}% discount`);
console.log(`${premiumCustomer.getCustomerInfo()} received ${premiumCustomer.getDiscount()}% discount and ${premiumCustomer.getPremiumBenefits()}`);