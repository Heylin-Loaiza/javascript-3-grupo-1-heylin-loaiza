import Publisher from "../Observer.js";

const observerColor = new Publisher();

function createInputColor(){
  const inputColor = document.querySelectorAll('.inputColor');

  inputColor.forEach(input => {
    input.addEventListener('change', function(event){
      const color = event.currentTarget.dataset.id;
      observerColor.notify(color);
    })
  })
}

createInputColor()

export {observerColor}