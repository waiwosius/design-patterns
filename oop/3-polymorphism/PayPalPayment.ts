import { PaymentMethod } from './PaymentMethod';

export class PayPalPayment extends PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} EUR using PayPal`);
  }
}