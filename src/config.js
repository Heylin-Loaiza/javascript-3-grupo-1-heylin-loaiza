const typeOfPlants = {
  lowLight: {
    toxic: {
      default: 'Sansevieria',
      overwater: 'Peace lily',
    },
    noToxic: {
      default: 'Boston Fern',
    },
  },
  mediumLight: {
    toxic: {
      default: 'Aglaonema',
      overwater: 'Peace lily',
    },
    noToxic: {
      default: 'Monstera',
      overwater: 'Peace lily',
    },
  },
  outdoor: {
    toxic: {
      default: 'Aloe Vera',
    },
    noToxic: {
      default: 'Cactus',
    },
  },
};

export default typeOfPlants;
