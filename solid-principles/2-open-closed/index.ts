import { RegularCustomer } from './RegularCustomer';
import { PremiumCustomer } from './PremiumCustomer';
import { Discount } from './Discount';

const premiumCustomer: PremiumCustomer = new PremiumCustomer();
const regularCustomer: RegularCustomer = new RegularCustomer();
const discount: Discount = new Discount();

const premiumDiscount = discount.giveDiscount(premiumCustomer);
console.log(`Premium customer discount: ${premiumDiscount}%`);

const regularDiscount = discount.giveDiscount(regularCustomer);
console.log(`Regular customer discount: ${regularDiscount}%`);