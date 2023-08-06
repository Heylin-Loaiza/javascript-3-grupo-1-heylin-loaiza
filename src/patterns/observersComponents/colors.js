import Observer from '../Observer.js';
import { potStyle } from '../../config.js';

const observerColor = new Observer();

function renderColorInputs() {
  const containerColorInputs = document.getElementById('container-color');

  let input = '';
  potStyle.colors.forEach((color) => {
    input += `
    <div> 
      <input data-id="${color}" class="inputColor ${color}" type="radio" value="${color}" name="pot-color">
      <label for="${color}">${color}</label>
    </div>`;
  });
  containerColorInputs.insertAdjacentHTML('afterbegin', input);
}

function eventColorInput() {
  const inputColor = document.querySelectorAll('.inputColor');

  inputColor.forEach((input) => {
    input.addEventListener('change', (event) => {
      const color = event.currentTarget.dataset.id;
      observerColor.notify(color);
    });
  });
}

function initColor() {
  renderColorInputs();
  eventColorInput();
}

export { initColor, observerColor };
