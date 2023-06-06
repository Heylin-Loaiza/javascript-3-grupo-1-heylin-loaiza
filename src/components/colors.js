import Publisher from '../Observer.js';
import {state, inventory} from '../config.js'

const observerColor = new Publisher();
const containerColorInputs = document.getElementById('container-color-inputs');
const colors = inventory[state.product];

function renderColorInputs() {
  Object.keys(colors).forEach(color => {
  const input = `
    <div> 
      <input data-id="${color}" class="inputColor ${color}" type="radio" value="${color}" name="product-color">
      <label for="${color}">${color}</label>
    </div>`;

  containerColorInputs.insertAdjacentHTML('beforeend', input);
});
}

function eventColorInput(){
  const inputColor = document.querySelectorAll('.inputColor');

  inputColor.forEach(input => {
    input.addEventListener('change', function(event){
      const color = event.currentTarget.dataset.id;
      observerColor.notify(color);
    })
  })
}

function initColor(){
  renderColorInputs()
  eventColorInput()
}


export { initColor, observerColor}