import { ProductDiscountAbstract } from './product-discount.abstract';
import { RegularProduct } from './regular-product';
import { DiscountedProduct } from './discounted-product';
import { DamagedProduct } from './damaged-product';

function printPrice(product: ProductDiscountAbstract) {
  console.log(
    `${product.title} -> Original price: ${product.price} EUR, Discount: ${product.calculateDiscount()} EUR, Price after discount: ${product.price - product.calculateDiscount()} EUR`
  );
}

printPrice(new RegularProduct('Regular product', 1500));
printPrice(new DiscountedProduct('Discounted product', 2000));
printPrice(new DamagedProduct('Damaged product', 1000, 0.3));