import proxy from '../patterns/Proxy.js';
import renderCards from './cards.js';

function initNav() {
  const tabs = document.querySelectorAll('.tabs')
  tabs.forEach(element => {
    element.addEventListener('click', async (event) => {
      event.preventDefault()
      const typeEvents = event.currentTarget.dataset.id
      const data = await proxy[typeEvents];
      renderCards(data)
    })
  })
}

export default initNav;