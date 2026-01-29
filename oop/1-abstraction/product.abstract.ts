export abstract class ProductAbstract {
  constructor(public title: string, public price: number) {
  }

  // Abstract method: subclasses must implement how price is calculated with discount
  abstract calculatePrice(): number;

  // Shared method for all products
  getTitle(): string {
    return this.title;
  }
}