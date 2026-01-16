import { ProductDiscount } from './ProductDiscount';
import { RegularProduct } from './RegularProduct';
import { DiscountedProduct } from './DiscountedProduct';
import { DamagedProduct } from './DamagedProduct';

function printPrice(product: ProductDiscount) {
  console.log(
    `${product.title} -> Original price: ${product.price} EUR, Discount: ${product.calculateDiscount()} EUR, Price after discount: ${product.price - product.calculateDiscount()} EUR`
  );
}

printPrice(new RegularProduct('Regular product', 1500));
printPrice(new DiscountedProduct('Discounted product', 2000));
printPrice(new DamagedProduct('Damaged product', 1000, 0.3));