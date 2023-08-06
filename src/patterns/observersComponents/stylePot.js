import { potStyle } from '../../config.js';
import Observer from '../Observer.js';

const observerStylePot = new Observer();

function renderStylesInputs() {
  const containerStyles = document.getElementById('container-styles');
  potStyle.styles.forEach((style) => {
    const input = `
    <div> 
      <input data-id="${style}" class="inputStyle ${style}" type="radio" value="${style}" name="pot-style">
      <label for="${style}">${style}</label>
    </div>`;
    containerStyles.insertAdjacentHTML('beforeend', input);
  });
}

function eventStyleInput() {
  const inputStyle = document.querySelectorAll('.inputStyle');

  inputStyle.forEach((input) => {
    input.addEventListener('change', (event) => {
      const style = event.currentTarget.dataset.id;
      observerStylePot.notify(style);
    });
  });
}

function initStyle() {
  renderStylesInputs();
  eventStyleInput();
}

export { initStyle, observerStylePot };
