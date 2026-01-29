import { RegularCustomer } from './regular-customer';
import { PremiumCustomer } from './premium-customer';
import { Discount } from './discount';

const premiumCustomer: PremiumCustomer = new PremiumCustomer();
const regularCustomer: RegularCustomer = new RegularCustomer();
const discount: Discount = new Discount();

const premiumDiscount = discount.giveDiscount(premiumCustomer);
console.log(`Premium customer discount: ${premiumDiscount}%`);

const regularDiscount = discount.giveDiscount(regularCustomer);
console.log(`Regular customer discount: ${regularDiscount}%`);