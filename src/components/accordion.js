import { prices } from '../config.js';

function getStock(plantInfo) {
  let alert = '';

  plantInfo.stock.forEach((item) => {
    if (item.stock >= 10) {
      alert = 'in stock';
    } else if (item.stock > 0 && item.stock < 10) {
      alert = 'One of the items in your order has limited stock. Order soon!';
    } else {
      alert =
        'One of the items in your order is out of stock. Please check the inventory alerts.';
    }
  });

  return alert;
}

const renderAccordion = (plantInfo) => {
  const {
    color,
    extraPrices,
    extras,
    name,
    pot,
    potPrice,
    soil,
    style,
    total,
    info,
  } = plantInfo;

  document.getElementById('info__plant').insertAdjacentHTML(
    'beforeend',
    `<h1>Plant with ${plantInfo.color} pot and ${plantInfo.soil} soil</h1>
    <p>$${plantInfo.total}</p>
    <p class="alert">${getStock(plantInfo)}</p>
    <button class="btn btn-bg">Order now!</button>
    <div id="container__info">
      <div class="container">
        <div class="tab">Price Breakdown</div>
        <div class="content">
          <div class="content--flex">
            <div>
              <p>${name}</p>
              <p>${color} ${pot} pot - ${style}</p>
              <p>${soil}</p>
              <p>${extras}</p>
              <p>Total: </p>
            </div>
            <div>
              <p>$${prices[name]}</p>
              <p>$${potPrice}</p>
              <p>$${prices[soil]}</p>
              <p>$${extraPrices}</p>
              <p>$${total}</p>
            </div>
          </div>
        </div>
      </div>
        <hr>
      <div class="container">
        <div class="tab">Inventory alerts</div>
        <div class="content content--flex">
          <div>
            <p>${name}</p>
            <p>${soil}</p>
            <p>${pot}</p>
          </div>
        </div>
      </div>
      <hr>
      <div class="container">
        <div class="tab">Plant description</div>
        <div class="content">
          <p>${info.description}</p>
        </div>
      </div>
      <hr>
      <div class="container">
        <div class="tab">Caring tips</div>
        <div class="content">
          <p><img class="img" src="../../assets/light.svg">${
            info.care.light
          }</p>
          <p><img class="img" src="../../assets/water.svg">${
            info.care.water
          }</p>
          <p><img class="img" src="../../assets/humidity.svg">${
            info.care.humidity
          }</p>
          <p><img class="img" src="../../assets/temperature.svg">${
            info.care.temperature
          }</p>
          </div>
        </div>
      </div>
    </div>`,
  );
  const accordion = document.querySelectorAll('.container');

  accordion.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
};

export default renderAccordion;
