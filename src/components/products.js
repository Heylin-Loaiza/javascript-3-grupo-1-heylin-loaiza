import Publisher from "../Observer.js";
import {state, inventory} from "../config.js";

const observerProduct = new Publisher();
const productsWrap = document.getElementById('products-wrap');

function createButtons(){
  let btn = '';
  const products = Object.keys(inventory);
  products.forEach(element => {
    btn += `<button class="js_products__btn" value="${element}">
    <img src="img/product-${element}-white.jpg" alt="">
    </button>`
  });
  productsWrap.innerHTML = btn;
}

function buttonsEvents(){
  const btn = document.querySelectorAll('.js_products__btn');

  btn.forEach(element => {
    element.addEventListener('click', () => {
    observerProduct.notify(element.value)
    state.product = element.value
    hideBtn()
    })
  })
}

function hideBtn(){
  const btn = document.querySelectorAll('.js_products__btn');
  btn.forEach(btn => {
    btn.value === state.product ? btn.style.display = 'none': btn.style.display= 'initial'
  });
}


function initProducts(){
  createButtons()
  buttonsEvents()
}

export {observerProduct,
  initProducts
}