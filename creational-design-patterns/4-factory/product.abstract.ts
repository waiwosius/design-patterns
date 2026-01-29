export abstract class ProductAbstract {
  constructor(public title: string, public price: number) {
  }

  abstract calculatePrice(): number;
}