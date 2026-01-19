import { ProductBuilder } from './ProductBuilder';

const product = new ProductBuilder()
  .setTitle('Product A')
  .setPrice(100)
  .setDescription('Best product ever')
  .setDiscount(0.1)
  .setCategory('Digital')
  .build();

console.log(product);