import { getDesignPot } from './getDesignPot.js';
import { state } from '../config.js';
import initVisualizerPot from './visualizePot.js';
import { extrasImg, eventAddExtras, initVisualizerExtras } from './extras.js';
import initVisualizerSoil from './visualizeSoil.js';
import initVisualizerPlant from './visualizePlant.js';

function card(plant) {
  let listExtras = '';
  plant.extras.forEach((item) => {
    listExtras += `<p class="card--font value text-uc extras">${item}</p>`;
  });

  document.getElementById('card__container').insertAdjacentHTML(
    'afterbegin',
    `<div class="card">
      <p class="card-text">The perfect plant for you is...
      <span class="card__title text-uc" id="card-title">${plant.name}</span>
      </p>
      
      <div class="card__img" id="card-img">
        ${extrasImg(plant)}
      </div>
      <div class="card-info">
        <div class="line">
        <p class="card--font keys">Name</p>
        <p class="card--font keys">Soil</p>
        <p class="card--font keys">Pot</p>
        <p class="card--font keys">Color</p>
        <p class="card--font keys">Extras</p>
        </div>
        <div>
          <p class="card--font value text-uc" id="p-name">${plant.name}</p>
          <p class="card--font value text-uc" id="p-soil">${plant.soil}</p>
          <p class="card--font value text-uc" id="p-pot">${plant.pot} with ${
            plant.style
          }</p>
          <p class="card--font value text-uc" id="p-color">${plant.color}</p>
          <div class="extras" id="p-extras">${listExtras}</div>
        </div>
      </div>
    </div>
    <button class="btn btn-bg card-btn" id="customize-btn">Customize!</button>
    `,
  );

  state.color = plant.color;
  state.name = plant.name;
  state.pot = plant.pot;
  state.soil = plant.soil;
  state.style = plant.style;
  state.extras = plant.extras;

  const btn = document.getElementById('customize-btn');
  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title-form');
    const formContainer = document.getElementById('form-container');
    const response = await fetch('../template/customizeHtml.html');
    const newForm = await response.text();

    formContainer.innerHTML = newForm;
    title.innerHTML = 'Customize your plant!';
    btn.innerHTML = 'Check store availability';
    btn.setAttribute('id', 'store');

    getDesignPot();
    eventAddExtras();
    initVisualizerPlant();
    initVisualizerPot();
    initVisualizerSoil();
    initVisualizerExtras();
  });
}

export default card;
