import Observer from '../patterns/Observer.js';
import { state } from '../config.js';

const observerExtras = new Observer();

function extrasImg(plant) {
  const { name, pot, style, soil, extras, color } = plant;
  let extraImages = `
    <img class="img-item" id="img-pot" src="../../public/assets/pots/${pot}-${style}-${color}.png" alt="">
    <img class="img-item" id="img-soil" src="../../public/assets/soil-${soil}.png" alt="">
    <img class="img-item img-item--plant" id="img-name" src="../../public/assets/plant-${name}.png" alt="">`;

  if (extras) {
    extras.forEach((item) => {
      extraImages += `<img class="img-item" id="img-extras" src="../../public/assets/${item}.png" alt="">`;
    });
  }

  return extraImages;
}

function eventAddExtras() {
  const extras = document.querySelectorAll('.custom-extra');
  const valuesExtra = [];

  extras.forEach((item) => {
    item.addEventListener('change', (e) => {
      const optionExtra = e.currentTarget.value;

      if (e.currentTarget.checked && !valuesExtra.includes(optionExtra)) {
        valuesExtra.push(optionExtra);
      } else if (
        !e.currentTarget.checked &&
        valuesExtra.includes(optionExtra)
      ) {
        const index = valuesExtra.indexOf(optionExtra);
        valuesExtra.splice(index, 1);
      }
      observerExtras.notify(valuesExtra);
    });
  });
}

function handleChangeExtras(extras) {
  const divExtras = document.getElementById('p-extras');
  const containerImages = document.getElementById('card-img');
  let text = '';
  extras.forEach((item) => {
    text += `<p class="card--font value extras">${item}</p>`;
  });
  divExtras.innerHTML = text;
  state.extras = extras;
  containerImages.innerHTML = extrasImg(state);
}

function initVisualizerExtras() {
  observerExtras.subscribe(handleChangeExtras);
}

export { extrasImg, eventAddExtras, initVisualizerExtras };
