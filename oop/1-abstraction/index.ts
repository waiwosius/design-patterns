import { ProductAbstract } from './product.abstract';
import { RegularProduct } from './regular-product';
import { DiscountedProduct } from './discounted-product';

function printPrice(product: ProductAbstract) {
  console.log(`${product.getTitle()} price: ${product.calculatePrice()} EUR`);
}

const productA = new RegularProduct('Product A', 1500);
const productB = new DiscountedProduct('Product B', 1500, 0.3);

printPrice(productA);
printPrice(productB);