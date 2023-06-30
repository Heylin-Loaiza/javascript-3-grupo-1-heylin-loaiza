import state from '../patterns/singleton.js';
import renderCards from '../components/cards.js';
import proxy from '../patterns/Proxy.js';

function addEvent(category){
  const addBtn = document.querySelectorAll('.js-event-state');
  addBtn.forEach(element => {
    element.addEventListener('click', () => {
      ///función que añade los eventos, cuando hace click envia los parametros
      /// el valor del botón(id del card(datos-objeto)) y la categoría(music, sports,---)
      addEvents(element.id, category, element.value)
    })
  })
  //añadir condicional para eliminar el botón de interesados
  
}

async function addEvents(id, category, stateList) {
  ///solicita eventos en cache de la categoria específica
  const data = await proxy[category]
    //recorre los eventos de la categoria y busca el objeto con el id =
  const event = data.find(element => {
    return element.id === id;
  });

  const filterEvent = state.getList(stateList, id)
  if (!filterEvent) {
    state.addToList(stateList, event);
  } 

  if(event)
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
  addEvent,
  renderInterested
}