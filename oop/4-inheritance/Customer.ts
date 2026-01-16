export class Customer {
  constructor(public name: string) {
  }

  getCustomerInfo(): string {
    return `Customer ${this.name}`;
  }
}