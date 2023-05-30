import { observerProduct } from './products.js';
import {state, storage} from '../config.js';
import { observerColor } from './colors.js';

const title= document.getElementById('title');
const price = document.getElementById('price');

function createDetails (product){
  title.innerHTML = `${state.color} ${product} with joke`;
  price.innerHTML = `${storage[product][state.color]}`
  state.product = product
}

function changeColor (color){
  title.innerHTML = `${color} ${state.product} with joke`;
  price.innerHTML = `${storage[state.product][color]}`
  state.color = color
}

observerProduct.subscribe(createDetails);
observerColor.subscribe(changeColor);