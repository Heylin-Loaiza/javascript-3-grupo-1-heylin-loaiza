import state from '../patterns/singleton.js';
const getStateList = state.getStateList();
const getStateKeys = Object.keys(getStateList)

function renderCardsBtn(id){
let buttons = '';
  getStateKeys.forEach(item => {
    if(item === 'favorites'){
      buttons +=  `<button id="${id}" value="${item}" class="btn ${item}-btn js-event-state"></button>`
    } else if(item === 'interested') {
      buttons += `<button id="${id}" value="${item}" class="event__btn js-event-state">${item}</button>`
    } else {
      buttons += `<button id="${id}" value="${item}" class="event__btn event__btn--bg js-event-state">${item}!</button>`
    }
  })

  return buttons
}

export {renderCardsBtn}