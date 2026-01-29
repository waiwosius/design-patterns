import { PaymentMethodAbstract } from './payment-method.abstract';

export class CreditCardPayment extends PaymentMethodAbstract {
  pay(amount: number): void {
    console.log(`Paid ${amount} EUR using Credit Card`);
  }
}