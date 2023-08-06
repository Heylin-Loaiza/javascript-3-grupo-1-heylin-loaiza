import {
  initColor,
  observerColor,
} from '../patterns/observersComponents/colors.js';
import { state } from '../config.js';
import Observer from '../patterns/Observer.js';
import {
  initStyle,
  observerStylePot,
} from '../patterns/observersComponents/stylePot.js';

function extrasImg(plant) {
  const { name, pot, style, soil, extras } = plant;
  let extraImages = `
    <img class="img-item" id="img-pot" src="../../public/assets/pots/${pot}-${style}-unpainted.png" alt="">
    <img class="img-item" id="img-soil" src="../../public/assets/soil-${soil}.png" alt="">
    <img class="img-item img-item--plant" id="img-name" src="../../public/assets/plant-${name}.png" alt="">`;

  if (extras) {
    extras.forEach((item) => {
      extraImages += `<img class="img-item" id="img-extras" src="../../public/assets/${item}.png" alt="">`;
    });
  }
  return extraImages;
}

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
      
      <div class="card__img prueba">
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
          <p class="card--font value text-uc" id="p-pot">${plant.pot} with ${plant.style
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
  state.extras = listExtras;

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
    //     termina evento ////////////

    //   <----- estado de color -----> ///////
    initColor();
    const colorText = document.getElementById('p-color');
    const imgPot = document.getElementById('img-pot');
    function handleChangeColorPot(color) {
      colorText.textContent = `${color}`;
      imgPot.setAttribute(
        'src',
        `../../public/assets/pots/${state.pot}-${state.style}-${color}.png`,
      );
      state.color = color;
    }

    // <------ estado de pot/maceta -----> /////////
    const material = document.querySelectorAll('.material');
    const observerpot = new Observer();
    const potText = document.getElementById('p-pot');
    material.forEach((element) => {
      element.addEventListener('change', (event) => {
        const potMaterial = event.currentTarget.dataset.id;
        observerpot.notify(potMaterial);
      });
    });

    function handleChangePot(pot) {
      potText.textContent = `${pot} with ${state.style}`;
      imgPot.setAttribute(
        'src',
        `../../public/assets/pots/${pot}-${state.style}-${state.color}.png`,
      );
      state.pot = pot;
    }

    // <------- estado de estilo ------> ////////
    initStyle();
    function handleChangeStyle(style) {
      potText.textContent = `${state.pot} with ${style}`;
      imgPot.setAttribute(
        'src',
        `../../public/assets/pots/${state.pot}-${style}-${state.color}.png`,
      );
      state.style = style;
    }

    // <------- estado de soil ------> ////////
    const observerSoil = new Observer();
    function eventSoilInput() {
      const inputSoil = document.querySelectorAll('.soil');

      inputSoil.forEach((input) => {
        input.addEventListener('change', (e) => {
          const soil = e.currentTarget.dataset.id;
          observerSoil.notify(soil);
        });
      });
    }
    eventSoilInput();

    function handleChangeSoil(soil) {
      const soilText = document.getElementById('p-soil');
      const imgSoil = document.getElementById('img-soil');
      soilText.textContent = `${soil}`;
      imgSoil.setAttribute('src', `../../public/assets/soil-${soil}.png`);
      state.soil = soil;
    }

    // <------- estado de name ------> ////////
    const observerName = new Observer();
    function eventNameOption() {
      const select = document.getElementById('plant');
      select.addEventListener('change', (e) => {
        const name = e.currentTarget.value;
        observerName.notify(name);
      });
    }
    eventNameOption();

    function handleChangeName(name) {
      const nameText = document.getElementById('p-name');
      const imgName = document.getElementById('img-name');
      const cardTitle = document.getElementById('card-title');
      nameText.textContent = `${name}`;
      cardTitle.textContent = `${name}`;
      imgName.setAttribute('src', `../../public/assets/plant-${name}.png`);
      state.name = name;
    }

    // <------- estado de extras ------> ////////
    const observerExtras = new Observer();
    function eventAddExtras() {
      const extras = document.querySelectorAll('.custom-extra');
      const valuesExtra = [];

      extras.forEach((item) => {
        item.addEventListener('change', (e) => {
          const optionExtra = e.currentTarget.value;

          if (e.currentTarget.checked && !valuesExtra.includes(optionExtra)) {
            valuesExtra.push(optionExtra);
          } else if (
            !e.currentTarget.checked &&
            valuesExtra.includes(optionExtra)
          ) {
            const index = valuesExtra.indexOf(optionExtra);
            valuesExtra.splice(index, 1);
          }
          observerExtras.notify(valuesExtra);
        });
      });
    }
    eventAddExtras();

    function handleChangeExtras(extras) {
      const divExtras = document.getElementById('p-extras');
      const imgExtras = document.getElementById('img-extras');
      const prueba = document.querySelector('.prueba')
      let a = '';
      extras.forEach((item) => {
        a += `<p class="card--font value extras">${item}</p>`;
      });
      divExtras.innerHTML = a;
      state.extras = extras;

      let extraImages = ``;
      if (extras) {
        extras.forEach((item) => {
          extraImages += `<img class="img-item" id="img-extras" src="../../public/assets/${item}.png" alt="">`;
        });
      }
      return extraImages;
    }
    // <------- suscribe las funciones ------> ////////
    function initVisualizer() {
      observerColor.subscribe(handleChangeColorPot);
      observerpot.subscribe(handleChangePot);
      observerStylePot.subscribe(handleChangeStyle);
      observerSoil.subscribe(handleChangeSoil);
      observerName.subscribe(handleChangeName);
      observerExtras.subscribe(handleChangeExtras);
    }
    initVisualizer();
  });
}

export default card;
