import { prices } from '../config.js';
import { inventory, description } from '../api.js';

const getInfo = async (plantInfo, next) => {
  try {
    const plant = inventory('plant', `${plantInfo.name}`);
    const soil = inventory('soil', `${plantInfo.soil}`);
    const pot = inventory(
      'pot',
      `${plantInfo.pot}-${plantInfo.style}-${plantInfo.color}`,
    );

    const plantDescription = await description(plantInfo.name);
    plantInfo.info = plantDescription;

    const values = await Promise.all([plant, soil, pot]);
    plantInfo.stock = values;
    next();
  } catch (err) {
    console.error(err);
  }
};

const getExtrasPrices = (plantInfo, next) => {
  let priceExtras = 0;

  plantInfo.extras.forEach((extra) => {
    priceExtras += prices[extra] || 0;
  });
  plantInfo.extraPrices = priceExtras;
  next();
};

const getPotPrice = (plantInfo, next) => {
  const { pot, color, style } = plantInfo;
  const typeOfPot = prices[pot];

  if (color !== 'unpainted' && style === 'decorated') {
    plantInfo.potPrice = typeOfPot.especial;
  } else if (color !== 'unpainted') {
    plantInfo.potPrice = typeOfPot.painted;
  } else {
    plantInfo.potPrice = typeOfPot[style];
  }

  next();
};

const total = (plantInfo, next) => {
  const { name, soil, extraPrices, potPrice } = plantInfo;
  const result = prices[name] + prices[soil] + extraPrices + potPrice;
  plantInfo.total = result;

  next();
};

export { getInfo, getExtrasPrices, getPotPrice, total };
