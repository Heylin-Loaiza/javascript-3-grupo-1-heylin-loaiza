import '../styles/card.css';

function card(plant) {
  let listExtras = '';

  plant.extras.forEach((item) => {
    listExtras += `<p class="card--font value">${item}</p>`;
  });

  document.getElementById('card__container').insertAdjacentHTML(
    'afterbegin',
    `<div class="card">
      <p class="card-text">The perfect plant for you is...</p>
      <p class="card__title">${plant.name}</p>
      <div class="card__img"><img src="../../public/assets/plant-${plant.name}.png" alt=""></div>
      <div class="card-info">
        <div class="line">
        <p class="card--font keys">Name</p>
        <p class="card--font keys">Soil</p>
        <p class="card--font keys">Pot</p>
        <p class="card--font keys">Color</p>
        <p class="card--font keys">Extras</p>
        </div>
        <div>
          <p class="card--font value">${plant.name}</p>
          <p class="card--font value">${plant.soil}</p>
          <p class="card--font value">${plant.pot} with ${plant.style}</p>
          <p class="card--font value">${plant.color}</p>
          <div class="extras">${listExtras}</div>
        </div>
      </div>
    </div>`,
  );
}

export default card;
