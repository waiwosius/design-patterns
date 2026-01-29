import { Product } from './product';
import { ProductNewsletter } from './product-newsletter';

const productA = new Product('Product A', 'A powerful product A', 1500);

console.log(`Product title: ${productA.title}, price: ${productA.getPrice()}`);

productA.changePrice(1200);
console.log(`Updated ${productA.title} price: ${productA.getPrice()}`);

const newsletter = new ProductNewsletter();
newsletter.send(productA);