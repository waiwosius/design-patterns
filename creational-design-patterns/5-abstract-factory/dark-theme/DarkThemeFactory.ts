import { UIFactory } from '../interfaces/UIFactory';
import { Button } from '../interfaces/Button';
import { DarkButton } from './DarkButton';
import { Checkbox } from '../interfaces/Checkbox';
import { DarkCheckbox } from './DarkCheckbox';

export class DarkThemeFactory implements UIFactory {
  createButton(): Button {
    return new DarkButton();
  }

  createCheckbox(): Checkbox {
    return new DarkCheckbox();
  }
}