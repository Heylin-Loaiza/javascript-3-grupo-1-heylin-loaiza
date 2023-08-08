import { potDesign } from '../config.js';

function renderInputs(key) {
  const container = document.getElementById(`container-${key}`);
  potDesign[key].forEach((design) => {
    const input = `
    <div> 
      <input data-id="${design}" class="input${key} ${design}" type="radio" value="${design}" name="${key}">
      <label for="${design}">${design}</label>
    </div>`;
    container.insertAdjacentHTML('beforeend', input);
  });
}

function eventInput(observer, key) {
  const inputs = document.querySelectorAll(`.input${key}`);
  inputs.forEach((input) => {
    input.addEventListener('change', (event) => {
      const target = event.currentTarget.dataset.id;
      observer.notify(target);
    });
  });
}

export { renderInputs, eventInput };
