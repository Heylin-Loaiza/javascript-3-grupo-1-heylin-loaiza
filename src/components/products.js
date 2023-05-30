import Publisher from "../observer.js";
import {storage} from "../config.js";

const observerProduct = new Publisher();

function notifyProduct(event) {
  observerProduct.notify(event.currentTarget.dataset.productid);
}

function createButtons() {
  const productsWrap = document.querySelector('#products-wrap');
  const storages = Object.keys(storage)
  storages.shift()
  storages.forEach(element => {
    const btn = document.createElement('button');
    btn.classList.add('products__btn');
    btn.dataset.productid = element;
    btn.addEventListener('click', notifyProduct);
    btn.innerHTML = `<img src="img/product-${element}-white.jpg" alt="">`;
    productsWrap.appendChild(btn);
  });
}

createButtons();

export {observerProduct}