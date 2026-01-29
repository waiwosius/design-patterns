export abstract class ProductDiscountAbstract {
  constructor(public title: string, public price: number) {
  }

  abstract calculateDiscount(): number;
}