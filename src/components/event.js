import proxy from '../proxy/Proxy.js';
import renderCards from './cards.js';

const tabs = document.querySelectorAll('.tabs')

function nav() {
  tabs.forEach(element => {
    element.addEventListener('click', async (event) => {
      event.preventDefault()
      const typeEvents = event.currentTarget.dataset.id
      const data = await proxy[typeEvents];
      renderCards(data)
    })
  })
}

function initInfo(){
  nav()
}

export default initInfo;