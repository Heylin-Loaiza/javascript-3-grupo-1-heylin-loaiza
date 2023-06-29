import state from '../patterns/singleton.js';
import renderCards from '../components/cards.js';
import proxy from '../patterns/Proxy.js';

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

  const listEvents = state.getInterested().some(item => item.id === event.id);

  if (!listEvents) {
    state.addInterested(event);
  } else {
    console.log(state.getInterested());
  }
}

function renderInterested(){
  const tabs = document.querySelectorAll('.tabs-account');

  tabs.forEach(element => {
    element.addEventListener('click', () =>{
      state.loadInterested()
      const v = state.getInterested()
      console.log(v)
      renderCards(v)
    })
  })
}

export {
  eventBtn,
  renderInterested
}