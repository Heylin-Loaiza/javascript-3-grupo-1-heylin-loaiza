import { observerProduct } from './products.js';
import {state, storage} from '../config.js';
import { observerColor } from './colors.js';


const mainImg = document.querySelector('#main-img');

function changeMainImg(product){
  mainImg.setAttribute('src', `/img/product-${product}-${state.color}.jpg`)
  state.product = product
}

function changeMainImgColor(color){
  mainImg.setAttribute('src', `/img/product-${state.product}-${color}.jpg`)
  state.color= color
}

// /// Suscribir
observerProduct.subscribe(changeMainImg);
observerColor.subscribe(changeMainImgColor);



