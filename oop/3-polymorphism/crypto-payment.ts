import { PaymentMethodAbstract } from './payment-method.abstract';

export class CryptoPayment extends PaymentMethodAbstract {
  pay(amount: number): void {
    console.log(`Paid ${amount} EUR using Cryptocurrency`);
  }
}