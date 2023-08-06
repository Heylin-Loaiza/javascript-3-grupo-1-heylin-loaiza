const typeOfPlants = {
  lowLight: {
    toxic: {
      default: 'sansevieria',
      overwater: 'peace-lily',
    },
    noToxic: {
      default: 'fern',
    },
  },
  mediumLight: {
    toxic: {
      default: 'aglaonema',
      overwater: 'peace-lily',
    },
    noToxic: {
      default: 'monstera',
      overwater: 'peace-lily',
    },
  },
  outdoor: {
    toxic: {
      default: 'aloe',
      overwater: 'aloe',
    },
    noToxic: {
      default: 'cactus',
    },
  },
};

const state = {
  name: '',
  color: 'no-color',
  soil: '',
  pot: '',
  style: '',
  extras: [],
};

const potStyle = {
  colors: ['blue', 'pink', 'green', 'purple'],
  styles: ['decorated', 'simple', 'painted'],
};

export { typeOfPlants, state, potStyle };
