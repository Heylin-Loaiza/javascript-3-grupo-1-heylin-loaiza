import {proxy} from '../patterns/Proxy.js';
import renderCards from './cards.js';
import method from '../patterns/singleton.js';

function initNav() {
  const tabs = document.querySelectorAll('.tabs')
  tabs.forEach(element => {
    element.addEventListener('click',async (event) => {
      event.preventDefault()
      const typeEvents = event.currentTarget.dataset.id
      const data = await proxy[typeEvents];
      //console.log(data)
      renderCards(data, typeEvents)
      eventBtn(typeEvents)
    })
  })

}

function eventBtn(category){
  const interestedBtn = document.querySelectorAll('.interested__btn');
  interestedBtn.forEach(element => {
    element.addEventListener('click', () => {
      prueba(element.value, category)
    })
  })
  
}

function prueba(id, category){
  console.log(proxy.getCache(category))
  const event = proxy[category].find(element => {
    element.id === id
  })
  method.addInterested(event)
  console.log(method.getInterested())
  //console.log(id, category)
}
export {initNav};