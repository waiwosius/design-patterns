import { Notification } from './notification.interface';

export class EmailService implements Notification {
  send(message: string): void {
    console.log(`Email sent: ${message}`);
  }
}