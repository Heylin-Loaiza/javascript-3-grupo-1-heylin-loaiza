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
  color: '',
  soil: '',
  pot: '',
  style: '',
  extras: [],
};

const potDesign = {
  color: ['blue', 'pink', 'green', 'purple', 'unpainted'],
  styles: ['decorated', 'simple'],
};

export { typeOfPlants, state, potDesign };
