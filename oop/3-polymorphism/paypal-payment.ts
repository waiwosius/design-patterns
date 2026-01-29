import { PaymentMethodAbstract } from './payment-method.abstract';

export class PaypalPayment extends PaymentMethodAbstract {
  pay(amount: number): void {
    console.log(`Paid ${amount} EUR using PayPal`);
  }
}