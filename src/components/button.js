import { getDesignPot } from './getDesignPot.js';
import { state } from '../config.js';
import initVisualizerPot from './visualizePot.js';
import { eventAddExtras, initVisualizerExtras } from './extras.js';
import initVisualizerSoil from './visualizeSoil.js';
import initVisualizerPlant from './visualizePlant.js';

const container = document.getElementById('card__container');

function link() {
  const anchor = document.createElement('a');
  anchor.href = '../src/pages/store.html';
  anchor.textContent = 'Check store availability';
  anchor.id = 'store-link';
  anchor.classList.add('btn', 'btn-bg', 'anchor');
  container.appendChild(anchor);
  anchor.addEventListener('click', () => {
    sessionStorage.setItem('plantObj', JSON.stringify(state));
  });
}

function renderBtn(plant) {
  state.color = plant.color;
  state.name = plant.name;
  state.pot = plant.pot;
  state.soil = plant.soil;
  state.style = plant.style;
  state.extras = plant.extras;

  container.insertAdjacentHTML(
    'beforeend',
    `<button class="btn btn-bg card-btn" id="customize-btn">Customize!</button>`,
  );

  const btn = document.getElementById('customize-btn');
  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title-form');
    const formContainer = document.getElementById('form-container');
    const response = await fetch('../template/customizeHtml.html');
    const newForm = await response.text();

    formContainer.innerHTML = newForm;
    title.innerHTML = 'Customize your plant!';

    getDesignPot();
    eventAddExtras();
    initVisualizerPlant();
    initVisualizerPot();
    initVisualizerSoil();
    initVisualizerExtras();

    container.removeChild(btn);
    link();
  });
}

export default renderBtn;
