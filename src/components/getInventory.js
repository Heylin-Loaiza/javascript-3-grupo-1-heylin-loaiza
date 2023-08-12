import { inventory } from '../api.js';

const getStockPlant = async (plantObj) => {
  const inInventory = await inventory('plant', `${plantObj.name}`);
  if (inInventory.stock >= 10) {
    console.log('in stock');
  } else if (inInventory.stock <= 10) {
    console.log(
      'One of the items in your order has limited stock. Order soon!”',
    );
  } else {
    console.log(
      '“One of the items in your order is out of stock. Please check the inventory alerts.”',
    );
  }
};

const getStockSoil = async (plantObj) => {
  const prueba = await inventory('soil', `${plantObj.soil}`);
  if (prueba.stock >= 10) {
    console.log('in stock');
  } else if (prueba.stock <= 10) {
    console.log(
      'One of the items in your order has limited stock. Order soon!”',
    );
  } else {
    console.log(
      '“One of the items in your order is out of stock. Please check the inventory alerts.”',
    );
  }
};

const getStockPot = async (plantObj) => {
  const amount = await inventory(
    'pot',
    `${plantObj.pot}-${plantObj.style}-${plantObj.color}`,
  );
  if (amount.stock >= 10) {
    console.log('in stock');
  } else if (amount.stock <= 10) {
    console.log(
      'One of the items in your order has limited stock. Order soon!”',
    );
  } else {
    console.log(
      '“One of the items in your order is out of stock. Please check the inventory alerts.”',
    );
  }
};

export { getStockPlant, getStockSoil, getStockPot };
