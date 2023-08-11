import card from '../components/card.js';
import { addToStack } from '../patterns/pipeline.js';
import { inventory, description } from '../api.js';
import { prices } from '../config.js';

const plantObj = JSON.parse(sessionStorage.getItem('plantObj'));
const previewCardContainer = document.getElementById('preview__card');
const containerInfo = document.getElementById('info__plant');
const title = document.getElementById('preview__plant__title');
title.innerHTML = `Plant with ${plantObj.color} pot and ${plantObj.soil} soil`;
card(plantObj, 'preview__card');

function renderBackBtn() {
  const backBtn = document.createElement('a');
  backBtn.href = '../../index.html';
  backBtn.textContent = 'Check store availability';
  backBtn.classList.add('btn', 'btn-bg', 'anchor');
  previewCardContainer.appendChild(backBtn);
  // añadir que cuando haga click, se carga el index con el segundo form
}
renderBackBtn();
function getExtrasPrices() {
  let priceExtras = 0;

  plantObj.extras.forEach((extra) => {
    priceExtras += prices[extra] || 0;
  });
  return priceExtras;
}

function getPotPrice() {
  const { pot, color, style } = plantObj;
  const typeOfPot = prices[pot];
  if (color !== 'unpainted' && style === 'decorated') {
    return typeOfPot.especial;
  }
  if (color !== 'unpainted') {
    return typeOfPot.painted;
  }
  return typeOfPot[style];
}

function total() {
  const { name, soil } = plantObj;
  const result =
    prices[name] + prices[soil] + getExtrasPrices() + getPotPrice();
  return result;
}

function priceContent() {
  const { name, soil, pot, color, extras, style } = plantObj;
  const text = `<div>
      <div>
        <p>${name}</p>
        <p>${color} ${pot} pot - ${style}</p>
        <p>${soil}</p>
        <p>${extras}</p>
        <p>Total: </p>
      </div>
      <div>
        <p>$${prices[name]}</p>
        <p>$${getPotPrice()}</p>
        <p>$${prices[soil]}</p>
        <p>$${getExtrasPrices()}</p>
        <p>$${total()}</p>
      </div>
    </div>`;
  return text;
}

const getStockPlant = async () => {
  const prueba = await inventory('plant', `${plantObj.name}`);
  if (prueba.stock >= 10) {
    console.log('in stock')
  } else if (prueba.stock <= 10) {
    console.log(
      'One of the items in your order has limited stock. Order soon!”',
    );
  } else {
    console.log(
      '“One of the items in your order is out of stock. Please check the inventory alerts.”',
    );
  }
};
getStockPlant();

const getStockSoil = async () => {
  const prueba = await inventory('soil', `${plantObj.soil}`);
  if (prueba.stock >= 10) {
    console.log('in stock')
  } else if (prueba.stock <= 10) {
    console.log(
      'One of the items in your order has limited stock. Order soon!”',
    );
  } else {
    console.log(
      '“One of the items in your order is out of stock. Please check the inventory alerts.”',
    );
  }
};
getStockSoil();

const getStockPot = async () => {
  const amount = await inventory(
    'pot',
    `${plantObj.pot}-${plantObj.style}-${plantObj.color}`,
  );
  if (amount.stock >= 10) {
    console.log('in stock')
  } else if (amount.stock <= 10) {
    console.log(
      'One of the items in your order has limited stock. Order soon!”',
    );
  } else {
    console.log(
      '“One of the items in your order is out of stock. Please check the inventory alerts.”',
    );
  }
};
getStockPot();

async function getDescription() {
  const plantDescription = await description(`${plantObj.name}`);
  const descriptionText = ` <p>${plantDescription.description}</p>`;
  return descriptionText;
}

async function getCaringTips() {
  const plantDescription = await description(`${plantObj.name}`);
  const { light, water, humidity, temperature } = plantDescription.care;
  const descriptionText = `
  <li>${light}</li>
  <li>${water}</li>
  <li>${humidity}</li>
  <li>${temperature}</li>`;
  return descriptionText;
}

async function createMenu() {
  const descriptionPlant = await getDescription();
  const CaringTips = await getCaringTips();
  containerInfo.insertAdjacentHTML(
    'beforeend',
    `<ul id="menu" class="menu">
      <li class="dropdownStore">
          <a href="#">Price Breakdown</a>
          <div class="dropdown-content">
            ${priceContent()}
          </div>
        </li>
        <li class="dropdownStore">
          <a href="#">Inventory alerts</a>
          <div class="dropdown-content">
          <!-- Contenido del desplegable -->
          </div>
        </li>
        <li class="dropdownStore">
          <a href="#">Plant description</a>
          <div class="dropdown-content">
          ${descriptionPlant}
          </div>
        </li>
        <li class="dropdownStore">
          <a href="#">Caring tips</a>
          <ul class="dropdown-content">
            ${CaringTips}
          </ul>
      </li>
    </ul>`,
  );
}
createMenu();
function dropdown() {
  const dropdownItems = document.querySelectorAll('.dropdownStore');

  dropdownItems.forEach((item) => {
    const dropdownContent = item.querySelector('.dropdown-content');
    const arrowIcon = item.querySelector('.arrow-icon');

    item.addEventListener('click', () => {
      dropdownContent.classList.toggle('show');
      arrowIcon.classList.toggle('rotate');
    });
  });
}
dropdown()
// addToStack();