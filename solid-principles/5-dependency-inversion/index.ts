import { Product } from '../1-single-responsibility/product';
import { EmailService } from './email-service';
import { ProductNewsletter } from './product-newsletter';
import { PushService } from './push-service';

const productA = new Product('Product A', 'Best product in the market', 1500);

// Using Email service
const emailService = new EmailService();
const newsletterEmail = new ProductNewsletter(emailService);
newsletterEmail.send(productA);

// Using SMS service
const smsService = new PushService();
const newsletterSMS = new ProductNewsletter(smsService);
newsletterSMS.send(productA);