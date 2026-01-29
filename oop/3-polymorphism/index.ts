import { CreditCardPayment } from './credit-card-payment';
import { PaypalPayment } from './paypal-payment';
import { CryptoPayment } from './crypto-payment';

const creditCard = new CreditCardPayment();
const payPal = new PaypalPayment();
const crypto = new CryptoPayment();

creditCard.pay(10);
payPal.pay(15);
crypto.pay(20);
