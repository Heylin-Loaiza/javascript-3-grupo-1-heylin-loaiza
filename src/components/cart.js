import { state } from "../config";

const addToCartBtn = document.querySelector('#add-to-cart');
let products = [];

function addToCart(){
  addToCart.addEventListener('click', () => {
    const product= new CartProducts({product: state.product, color: state.color, joke: state.joke})
    product.push()
  })
  
}

function initCart(){

}

export default {initCart}