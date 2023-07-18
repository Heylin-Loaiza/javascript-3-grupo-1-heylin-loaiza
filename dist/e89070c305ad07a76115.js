import typeOfPlants from './config.js';
import Plant from './builder/builder.js';

const form = document.querySelector('#form');

function getName(formData) {
  const name = typeOfPlants[formData.location];
  if (formData.location === 'lowLight') {
    if (formData.pets === 'toxic' && formData.watering === 'default') {
      return name[formData.pets].default;
    }
    if (formData.pets === 'toxic' && formData.watering === 'overwater') {
      return name[formData.pets].overwater;
    }
    return name[formData.pets].default;
  }

  if (formData.location === 'mediumLight') {
    if (formData.pets === 'toxic' && formData.watering === 'default') {
      return name[formData.pets].default;
    }
    if (formData.pets === 'toxic' && formData.watering === 'overwater') {
      return name[formData.pets].overwater;
    }
    if (formData.pets === 'noToxic' && formData.watering === 'overwater') {
      return name[formData.pets].overwater;
    }
    return name[formData.pets].default;
  }

  if (formData.location === 'outdoor') {
    if (formData.pets === 'toxic') {
      return name[formData.pets].default;
    }
    return name[formData.pets].default;
  }

  return null;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const dataExtras = [];
  data.getAll('extras').forEach((value) => {
    dataExtras.push(value);
  });

  const formData = Object.fromEntries(data);
  formData.extras = dataExtras;

  const plantName = getName(formData);
  const { soil, style, extras } = formData;

  const plant = new Plant(plantName)
    .setSoil(soil)
    .setPotDecoration(style)
    .setPotColor('clay')
    .setExtra(extras);
  if (formData.watering === 'overwater') {
    plant.withClayPot();
    plant.setSoil('Drainage');
  } else {
    plant.withCeramicPot();
  }

  // console.log(formData);
});
