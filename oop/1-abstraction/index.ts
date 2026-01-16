import { Product } from './Product';
import { RegularProduct } from './RegularProduct';
import { DiscountedProduct } from './DiscountedProduct';

function printPrice(product: Product) {
  console.log(`${product.getTitle()} price: ${product.calculatePrice()} EUR`);
}

const productA = new RegularProduct('Product A', 1500);
const productB = new DiscountedProduct('Product B', 1500, 0.3);

printPrice(productA);
printPrice(productB);