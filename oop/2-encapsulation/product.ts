export class Product {
  private _quantity: number;

  constructor(initialQuantity: number) {
    this._quantity = initialQuantity;
  }

  // Getter method for quantity
  getQuantity(): number {
    return this._quantity;
  }

  addStock(amount: number): void {
    if (amount <= 0) {
      throw new Error('Amount to add must be positive');
    }
    this._quantity += amount;
  }

  removeStock(amount: number): void {
    if (amount <= 0) {
      throw new Error('Amount to remove must be positive');
    }
    if (amount > this._quantity) {
      throw new Error('Not enough stock');
    }
    this._quantity -= amount;
  }
}