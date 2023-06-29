import proxy from '../patterns/Proxy.js';
import renderCards from './cards.js';
import { eventBtn } from '../event-Tabs/add-events-btn.js';

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


export {initNav};