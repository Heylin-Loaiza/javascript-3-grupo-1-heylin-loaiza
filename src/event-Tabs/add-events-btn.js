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
    //recorre los eventos de la categoria y busca el objeto con el id igual
  const event = data.find(element => {
    //devuelve el objeto que coincide con el id
    return element.id === id;
  });

// obtiene el evento de la lista del botón
  const filterEvent = state.getEvent(stateList, id);
  //condicional para que se añada y lo haga 1 vez
  if (!filterEvent) { //si no está el evento en la lista
    state.addToList(stateList, event); //añade el evento a la lista
  } 
//condicional : si evento está en lista interesados no debe estár en la de going
  // if (stateList === 'going') {
  //   if (filterEvent) {
  //     state.removeListEvents('interested', filterEvent);
  //   }
  //   state.addToList(stateList, event);
  // } else {
  //   if (filterEvent) {
  //     state.removeListEvents('going', filterEvent);
  //   }
  //   state.addToList(stateList, event);
  // }

}
//*********cambiar  nombre ***********//
function renderLoadEvents(){
  //llama las tabs de account.html
  const tabs = document.querySelectorAll('.tabs-account');
//corregir tabs
  tabs.forEach(element => {
    element.addEventListener('click', () =>{
      state.loadStateList()

      const v = state.getStateList()
      const c = v[element.value]
      renderCards(c)
    })
  })
}


export {
  addEvent,
  renderLoadEvents
}