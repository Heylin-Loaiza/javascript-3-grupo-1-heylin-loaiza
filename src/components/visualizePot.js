import { state } from '../config.js';
import {
  observerColor,
  observerStylePot,
  observerPot,
} from './getDesignPot.js';

function handleChangeColorPot(color) {
  const colorText = document.getElementById('p-color');
  const imgPot = document.getElementById('img-pot');
  colorText.textContent = `${color}`;
  imgPot.setAttribute(
    'src',
    `../../assets/${state.pot}-${state.style}-${color}.png`,
  );
  state.color = color;
}

function handleChangePot(pot) {
  const potText = document.getElementById('p-pot');
  const imgPot = document.getElementById('img-pot');
  potText.textContent = `${pot} with ${state.style}`;
  imgPot.setAttribute(
    'src',
    `../../assets/${pot}-${state.style}-${state.color}.png`,
  );
  state.pot = pot;
}

function handleChangeStyle(style) {
  const potText = document.getElementById('p-pot');
  const imgPot = document.getElementById('img-pot');
  potText.textContent = `${state.pot} with ${style}`;
  imgPot.setAttribute(
    'src',
    `../../assets/${state.pot}-${style}-${state.color}.png`,
  );
  state.style = style;
}

function initVisualizerPot() {
  observerColor.subscribe(handleChangeColorPot);
  observerPot.subscribe(handleChangePot);
  observerStylePot.subscribe(handleChangeStyle);
}

export default initVisualizerPot;
