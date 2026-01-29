export abstract class ProductPrototypeAbstract {
  constructor(public title: string, public price: number) {
  }

  abstract clone(): ProductPrototypeAbstract;
}