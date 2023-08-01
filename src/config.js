const typeOfPlants = {
  lowLight: {
    toxic: {
      default: 'sansevieria',
      overwater: 'peace-lily',
    },
    noToxic: {
      default: 'boston-fern',
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
      default: 'aloe-vera',
    },
    noToxic: {
      default: 'cactus',
    },
  },
};

export default typeOfPlants;
