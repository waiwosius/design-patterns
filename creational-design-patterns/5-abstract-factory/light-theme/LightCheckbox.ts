import { Checkbox } from '../interfaces/Checkbox';

export class LightCheckbox implements Checkbox {
  render(): void {
    console.log('Render Light Checkbox');
  }
}