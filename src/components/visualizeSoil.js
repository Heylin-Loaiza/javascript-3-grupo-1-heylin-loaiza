import Observer from '../patterns/Observer.js';
import { eventInput } from './inputs.js';
import { state } from '../config.js';

const observerSoil = new Observer();
const keySoil = 'soil';

function getSoil() {
  eventInput(observerSoil, keySoil);
}

function handleChangeSoil(soil) {
  const soilText = document.getElementById('p-soil');
  const imgSoil = document.getElementById('img-soil');
  soilText.textContent = `${soil}`;
  imgSoil.setAttribute('src', `../../public/assets/soil-${soil}.png`);
  state.soil = soil;
}

function initVisualizerSoil() {
  getSoil();
  observerSoil.subscribe(handleChangeSoil);
}

export default initVisualizerSoil;
