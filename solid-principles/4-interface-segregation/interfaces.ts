export interface Discountable {
  calculateDiscount(): number;
}

export interface Shippable {
  ship(): void;
}

export interface Downloadable {
  download(): void;
}