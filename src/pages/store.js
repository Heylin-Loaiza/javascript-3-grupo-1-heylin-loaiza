import card from '../components/card.js';
import { addToStack, execute } from '../patterns/pipeline.js';
import renderAccordion from '../components/accordion.js';
import {
  getInfo,
  getExtrasPrices,
  getPotPrice,
  total,
} from '../components/getPrices.js';

const plantObj = JSON.parse(sessionStorage.getItem('plantObj'));
card(plantObj, 'preview__card');

function renderBackBtn() {
  const backBtn = document.createElement('a');
  backBtn.href = '../../index.html';
  backBtn.textContent = 'Check store availability';
  backBtn.classList.add('btn', 'btn-bg', 'anchor');
  document.getElementById('preview__card').appendChild(backBtn);
}
renderBackBtn();

addToStack(getInfo, getExtrasPrices, getPotPrice, total);
addToStack(renderAccordion);
execute(plantObj);
