import { CreditCardPayment } from './CreditCardPayment';
import { PayPalPayment } from './PayPalPayment';
import { CryptoPayment } from './CryptoPayment';

const creditCard = new CreditCardPayment();
const payPal = new PayPalPayment();
const crypto = new CryptoPayment();

creditCard.pay(10);
payPal.pay(15);
crypto.pay(20);
