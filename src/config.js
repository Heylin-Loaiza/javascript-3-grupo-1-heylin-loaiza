const typeOfPlants = {
  lowLight: {
    toxic: {
      default: 'sansevieria',
      overwater: 'peaceLily',
    },
    noToxic: {
      default: 'fern',
    },
  },
  mediumLight: {
    toxic: {
      default: 'aglaonema',
      overwater: 'peaceLily',
    },
    noToxic: {
      default: 'monstera',
      overwater: 'peaceLily',
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

const prices = {
  aglaonema: 12.99,
  aloe: 5.25,
  fern: 10.25,
  cactus: 8.25,
  monstera: 18.0,
  peaceLily: 8.75,
  sansevieria: 5.75,
  clay: {
    simple: 3.0,
    decorated: 4.0, // 5.0
    painted: 4.0,
    especial: 5.0,
  },
  ceramic: {
    simple: 5.0,
    decorated: 6.0, // 7.0
    painted: 6.0,
    especial: 7.0,
  },
  composted: 3.25,
  fertilized: 5.0,
  drainage: 5.5,
  moss_pole: 2.25,
  pebbles: 2.0,
  mini_plants: 3.75,
};

export { typeOfPlants, state, potDesign, prices };
