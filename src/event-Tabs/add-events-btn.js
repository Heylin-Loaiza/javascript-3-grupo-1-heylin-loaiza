import state from '../patterns/singleton.js';
import renderCards from '../components/cards.js';
import proxy from '../patterns/Proxy.js';

function addEvent(category){
  const addBtn = document.querySelectorAll('.js-event-state');
  addBtn.forEach(element => {
    element.addEventListener('click', (e) => {
      e.stopPropagation()
      addEvents(element.id, category, element.value)
    })
  })  
}

function handleEventState(stateList, event) {
  const newEvent = state.getEvent(stateList, event.id)

  if (stateList === 'going') {
    const eventInterestedList = state.getEvent('interested', event.id)
  
    if(eventInterestedList){
      state.addToList(stateList, event);
      state.removeListEvents('interested', event)
    } else {
      if(!newEvent){
        state.addToList(stateList, event);
      }
    }
  }

  if (stateList === 'interested') {
    const eventInterestedList = state.getEvent('going', event.id)

    if(eventInterestedList){
      state.addToList(stateList, event);
      state.removeListEvents('going', event)
    } else {
      if(!newEvent){
        state.addToList(stateList, event);
      }
    }
  }

  if(stateList === 'favorites'){
    state.addToList(stateList, event);
  }

////prueba remover
function detailDisplay() {
  if (words && words.style.display === "none") {
    words.style.display = "block";
  } else if (words) {
    words.style.display = "none";
  }
}

}

async function addEvents(id, category, stateList) {
  const data = await proxy[category]
  const event = data.find(element => {
    return element.id === id;
  });
  handleEventState(stateList, event)
}

function loadEvents(){
  const tabs = document.querySelectorAll('.tabs-account');
//corregir tabs
  tabs.forEach(element => {
    element.addEventListener('click', () =>{
      state.loadStateList()

      const getLists = state.getStateList()
      const list = getLists[element.value]
      renderCards(list)
    })
  })
}

export {
  addEvent,
  loadEvents
}