import { prices } from '../config.js';

const getExtrasPrices = (plantObj, next) => {
  let priceExtras = 0;

  plantObj.extras.forEach((extra) => {
    priceExtras += prices[extra] || 0;
  });

  plantObj.extraPrices = priceExtras;
  console.log(plantObj);
  next();
};

// const getPotPrice = (plantObj, next) => {
//   const { pot, color, style } = plantObj;
//   const typeOfPot = prices[pot];
//   if (color !== 'unpainted' && style === 'decorated') {
//     plantObj.potPrice = typeOfPot.especial;
//   }
//   if (color !== 'unpainted') {
//     plantObj.potPrice = typeOfPot.painted;
//   }
//   plantObj.potPrice = typeOfPot[style];
//   next();
// };
const getPotPrice = (plantObj, next) => {
  const { pot, color, style } = plantObj;
  const typeOfPot = prices[pot];

  if (color !== 'unpainted' && style === 'decorated') {
    plantObj.potPrice = typeOfPot.especial;
  } else if (color !== 'unpainted') {
    plantObj.potPrice = typeOfPot.painted;
  } else {
    plantObj.potPrice = typeOfPot[style];
  }

  next();
};
// const total = (plantObj) => {
//   const { name, soil } = plantObj;
//   const result =
//     prices[name] + prices[soil] + getExtrasPrices() + getPotPrice();
//   plantObj.total = result;
//   console.log(plantObj)
// };

const total = (plantObj, next) => {
  const { name, soil, extraPrices, potPrice } = plantObj;
  const result = prices[name] + prices[soil] + extraPrices + potPrice;
  plantObj.total = result;
  console.log(plantObj);
  next();
};

const priceContent = (plantObj) => {
  const { name, soil, pot, color, extras, style } = plantObj;
  const text = `<div>
      <div>
        <p>${name}</p>
        <p>${color} ${pot} pot - ${style}</p>
        <p>${soil}</p>
        <p>${extras}</p>
        <p>Total: </p>
      </div>
      <div>
        <p>$${prices[name]}</p>
        <p>$${getPotPrice(plantObj)}</p>
        <p>$${prices[soil]}</p>
        <p>$${getExtrasPrices(plantObj)}</p>
        <p>$${total(plantObj)}</p>
      </div>
    </div>`;
  return text;
};

export { getExtrasPrices, getPotPrice, total, priceContent };
