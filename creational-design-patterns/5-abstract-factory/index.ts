import { UIFactory } from './interfaces/UIFactory';
import { LightThemeFactory } from './light-theme/LightThemeFactory';
import { DarkThemeFactory } from './dark-theme/DarkThemeFactory';

function renderUI(factory: UIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  button.render();
  checkbox.render();
}

renderUI(new LightThemeFactory());
renderUI(new DarkThemeFactory());