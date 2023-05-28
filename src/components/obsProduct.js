import Publisher from "../observer.js";
import products from "../config.js";

/// Instancia
const observer = new Publisher();

/// Lógica
function createButtons (){
  const btnContainer = document.querySelector('#btnContainer');
  let btn = ''
  products.forEach(element => {
    btn += `<button class="product" value="${element.name}">${element.name}
      <img src="" alt="">
    </button>`
  })

  btnContainer.insertAdjacentHTML('afterbegin', btn)
}
createButtons()

function createTitle (product){
  const title= document.getElementById('title');

  title.textContent = `${product} with joke`;

}

/// Suscribir
observer.subscribe(createTitle);

/// Notificar/Mostrar
function nameProduct(){
  const productButtons = document.querySelectorAll('.product');

  productButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const productName = this.textContent;

      observer.notify(productName);
    });
  })
}
nameProduct()

