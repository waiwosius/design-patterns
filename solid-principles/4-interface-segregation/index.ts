import { PhysicalProduct } from './PhysicalProduct';
import { DigitalProduct } from './DigitalProduct';
import { DamagedPhysicalProduct } from './DamagedPhysicalProduct';

const productA = new PhysicalProduct('Product A', 60);
const digitalProductA = new DigitalProduct('Digital Product A', 50);
const damagedProductA = new DamagedPhysicalProduct('Damaged Product A', 60, 0.3);

console.log(productA.calculateDiscount());
console.log(damagedProductA.calculateDiscount());
productA.ship();
digitalProductA.download();
