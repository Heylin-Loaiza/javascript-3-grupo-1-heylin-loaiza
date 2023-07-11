import state from '../patterns/singleton.js';
import renderCards from '../components/cards.js';
import proxy from '../patterns/Proxy.js';

function addEvent(category){
  const addBtn = document.querySelectorAll('.js-event-state');
  addBtn.forEach(element => {
    element.addEventListener('click', (e) => {
      e.stopPropagation()
      addEvents(element, category)
    })
  })  
}

function handleEventState(button, event) {
  const {value} = button
  //console.log(value)
  const newEvent = state.getEvent(value, event.id);

  if (value === 'going') {
    const eventInterestedList = state.getEvent('interested', event.id)
  
    if(eventInterestedList){
      state.addToList(value, event);
      state.removeListEvents('interested', event)
    } else {
      if(!newEvent){
        state.addToList(value, event);
      }
    }

    const interestedBtn = document.querySelector(`button[id="${button.id}"][value="interested"]`)
    const containerBtn = document.querySelector(`div[id="${event.id}"]`)
    
    button.textContent = 'Changed your mind?';
    button.classList.add('event__btn--active')
    containerBtn.classList.add('container--display')
    interestedBtn.style.display = 'none';
  }

  if (value === 'interested') {
    const eventInterestedList = state.getEvent('going', event.id)

    if(eventInterestedList){
      state.addToList(value, event);
      state.removeListEvents('going', event)
    } else {
      if(!newEvent){
        state.addToList(value, event);
      }
    }

    button.textContent = 'Changed your mind?';
    const containerBtn = document.querySelector(`div[id="${event.id}"]`)

    button.classList.add('event__btn--active')
    containerBtn.classList.add('container--display')
  }

  if(value === 'favorites'){
    state.addToList(value, event);
  }
  
}

function handleRemoveEvent(button, event){
  if(button.value === 'going' || button.value === 'interested'){
    const eventList = state.getEvent(button.value, event.id)
  
    if(eventList){
      state.removeListEvents(button.value, event)
    }
  }
  

  const containerBtn = document.querySelector(`div[id="${event.id}"]`);
  const interestedBtn = document.querySelector(`button[id="${button.id}"][value="interested"]`);

  button.textContent = `${button.value}`;
  button.classList.remove('event__btn--active');
  containerBtn.classList.remove('container--display');
  interestedBtn.style.display = 'block';
}

async function addEvents(button, category) {
  const data = await proxy[category]
  const event = data.find(element => {
    return element.id === button.id;
  });

  !state.getEvent(button.value, event.id) ? handleEventState(button, event) : handleRemoveEvent(button, event);
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