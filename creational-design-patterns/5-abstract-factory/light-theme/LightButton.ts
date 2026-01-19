import { Button } from '../interfaces/Button';

export class LightButton implements Button {
  render(): void {
    console.log('Render Light Button');
  }
}