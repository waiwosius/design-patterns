import { Notification } from './notification.interface';

export class PushService implements Notification {
  send(message: string): void {
    console.log(`Push notification sent: ${message}`);
  }
}