import {state, inventory} from '../config.js';
import { observerProduct } from './products.js';
import { observerColor } from './colors.js';
import { randomJokes } from '../api.js';

const title= document.getElementById('title');
const price = document.getElementById('price');
const joke = document.getElementById('joke_p');

async function render() {
  const apiJoke = await randomJokes();
  joke.textContent = `${apiJoke.joke}`
  title.textContent = `${state.color} ${state.product} with joke`;
  price.textContent = `${inventory[state.product] [state.color]}`;
}

function createDetails (product){
  title.innerHTML = `${state.color} ${product} with joke`;
  price.innerHTML = `${inventory[product][state.color]}`;
  state.product = product
}

function changeColor (color){
  title.innerHTML = `${color} ${state.product} with joke`;
  price.innerHTML = `${inventory[state.product][color]}`
  state.color = color
}

function initDetails(){
  observerProduct.subscribe(createDetails);
  observerColor.subscribe(changeColor);
  render()
}

export default initDetails;