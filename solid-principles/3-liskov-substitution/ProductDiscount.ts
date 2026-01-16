export abstract class ProductDiscount {
  constructor(public title: string, public price: number) {
  }

  abstract calculateDiscount(): number;
}