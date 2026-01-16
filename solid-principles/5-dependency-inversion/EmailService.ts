import { Notification } from './Notification';

export class EmailService implements Notification {
  send(message: string): void {
    console.log(`Email sent: ${message}`);
  }
}