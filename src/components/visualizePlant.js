import Observer from '../patterns/Observer.js';
import { state } from '../config.js';

const observerName = new Observer();

function eventNameOption() {
  const select = document.getElementById('plant');
  select.addEventListener('change', (e) => {
    const name = e.currentTarget.value;
    observerName.notify(name);
  });
}

function handleChangeName(name) {
  const nameText = document.getElementById('p-name');
  const imgName = document.getElementById('img-name');
  const cardTitle = document.getElementById('card-title');
  nameText.textContent = `${name}`;
  cardTitle.textContent = `${name}`;
  imgName.setAttribute('src', `../../public/assets/plant-${name}.png`);
  state.name = name;
}

function initVisualizerPlant() {
  eventNameOption();
  observerName.subscribe(handleChangeName);
}

export default initVisualizerPlant;
