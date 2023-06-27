import {proxy} from '../patterns/Proxy.js';
import renderCards from './cards.js';
import state from '../patterns/singleton.js';

function initNav() {
  const tabs = document.querySelectorAll('.tabs-js')
  tabs.forEach(element => {
    element.addEventListener('click',async (event) => {
      event.preventDefault()
      const typeEvents = event.currentTarget.dataset.id
      const data = await proxy[typeEvents];
      renderCards(data, typeEvents)
      eventBtn(typeEvents)
    })
  })
  
}

function eventBtn(category){
  const interestedBtn = document.querySelectorAll('.interested__btn');
  interestedBtn.forEach(element => {
    element.addEventListener('click', () => {
      addEvents(element.value, category)
    })
  })
  //añadir condicional para eliminar el botón de interesados
}

async function addEvents(id, category) {
  const events = await proxy[category];

  const event = events.find(element => {
    return element.id === id;
  });
  //console.log(event)

  // const isAlreadyAdded = state.getInterested().some(item => item.id === event.id);

  // if (!isAlreadyAdded) {
  //   state.addInterested(event);
  //   console.log("Evento agregado a la lista de interesados.");
  // } else {
  //   console.log("El evento ya está en la lista de interesados.");
  // }
  state.addInterested(event);
  console.log(state.getInterested());
}


export {initNav};