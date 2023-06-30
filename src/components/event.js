import proxy from '../patterns/Proxy.js';
import renderCards from './cards.js';
import { addEvent } from '../event-Tabs/add-events-btn.js';

function initNav() {
  const tabs = document.querySelectorAll('.tabs-js')
  tabs.forEach(element => {
    element.addEventListener('click',async (event) => {
      event.preventDefault()
      const typeEvents = event.currentTarget.dataset.id
      const data = await proxy[typeEvents];
      ///renderiza las cards en el home
      renderCards(data, typeEvents)
      /// envía la categoría a los botones de interested
      addEvent(typeEvents)
    })
  })
}


export {initNav};