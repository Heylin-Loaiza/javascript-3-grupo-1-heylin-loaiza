function extrasImg(plant) {
  let extraImages = `
    <img class="img-item" src="../../public/assets/simple-${plant.pot}.png" alt="">
    <img class="img-item" src="../../public/assets/soil-${plant.soil}.png" alt="">
    <img class="img-item img-item--plant" src="../../public/assets/plant-${plant.name}.png" alt="">`;

  if (plant.extras) {
    plant.extras.forEach((item) => {
      extraImages += `<img class="img-item" src="../../public/assets/${item}.png" alt="">`;
    });
  }
  return extraImages;
}

function card(plant) {
  let listExtras = '';

  plant.extras.forEach((item) => {
    listExtras += `<p class="card--font value">${item}</p>`;
  });

  document.getElementById('card__container').insertAdjacentHTML(
    'afterbegin',
    `<div class="card">
      <p class="card-text">The perfect plant for you is...
      <span class="card__title">${plant.name}</span>
      </p>
      
      <div class="card__img">
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
          <p class="card--font value">${plant.name}</p>
          <p class="card--font value">${plant.soil}</p>
          <p class="card--font value">${plant.pot} with ${plant.style}</p>
          <p class="card--font value">${plant.color}</p>
          <div class="extras">${listExtras}</div>
        </div>
      </div>
    </div>
    <button class="btn btn-bg card-btn" id="customize-btn">Customize!</button>
    `,
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
    btn.innerHTML = 'Check store availability';
  });
}

export default card;
