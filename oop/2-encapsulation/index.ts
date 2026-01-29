import { Product } from './product';

const product = new Product(15);

console.log(product.getQuantity()); // 15
product.addStock(5); //20
product.removeStock(6); // 14
console.log(product.getQuantity()); // 14