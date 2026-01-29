export class Product {
  constructor(
    public title: string,
    public description: string,
    private price: number
  ) {
  }

  getPrice() {
    return this.price;
  }

  changePrice(newPrice: number) {
    if (newPrice < 0) {
      throw new Error('Price cannot be negative');
    }

    this.price = newPrice;
  }
}