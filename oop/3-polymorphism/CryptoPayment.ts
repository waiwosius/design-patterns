import { PaymentMethod } from './PaymentMethod';

export class CryptoPayment extends PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} EUR using Cryptocurrency`);
  }
}