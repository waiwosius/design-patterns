import { UIFactory } from '../interfaces/UIFactory';
import { Button } from '../interfaces/Button';
import { LightButton } from './LightButton';
import { Checkbox } from '../interfaces/Checkbox';
import { LightCheckbox } from './LightCheckbox';

export class LightThemeFactory implements UIFactory {
  createButton(): Button {
    return new LightButton();
  }

  createCheckbox(): Checkbox {
    return new LightCheckbox();
  }
}