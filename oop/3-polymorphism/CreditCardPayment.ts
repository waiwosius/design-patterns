import { PaymentMethod } from './PaymentMethod';

export class CreditCardPayment extends PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} EUR using Credit Card`);
  }
}