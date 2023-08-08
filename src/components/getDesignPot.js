import Observer from '../patterns/Observer.js';
import { renderInputs, eventInput } from './inputs.js';

const observerColor = new Observer();
const observerStylePot = new Observer();
const observerPot = new Observer();

const color = 'color';
const style = 'styles';
const pot = 'pot';

function getColor() {
  renderInputs(color);
  eventInput(observerColor, color);
}

function getStyle() {
  renderInputs(style);
  eventInput(observerStylePot, style);
}

function getPot() {
  eventInput(observerPot, pot);
}

function getDesignPot() {
  getColor();
  getStyle();
  getPot();
}

export { getDesignPot, observerColor, observerStylePot, observerPot };
