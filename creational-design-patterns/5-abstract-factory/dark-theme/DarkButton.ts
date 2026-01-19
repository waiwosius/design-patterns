import { Button } from '../interfaces/Button';

export class DarkButton implements Button {
  render(): void {
    console.log('Render Dark Button');
  }
}