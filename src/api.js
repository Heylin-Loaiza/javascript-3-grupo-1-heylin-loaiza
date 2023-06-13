const eventsResults = async function (category) {
  const response = await fetch(`https://knassbani2.execute-api.us-east-2.amazonaws.com/events/${category}`);
  const data = await response.json()
  //return data
  renderCards(data)
}


//const navContainer = document.getElementById('nav');
const tabs = document.querySelectorAll('.tabs')
tabs.forEach(element => {
  element.addEventListener('click', (event) => {
    event.preventDefault()
    const typeEvents = event.currentTarget.dataset.id
    eventsResults(typeEvents)
  })
})

const ulCard = document.getElementById('ul__card');

function renderCards(data) {
  let cards = '';
  data.forEach(element => {
    const { title, image, date, location, price } = element;
    const time = new Date(date);
    cards += `
        <li class="card">
          <div class="card__wrapper">
            <img class="card__img" src="${image}" alt="">
            <div class="card__info">
              <p class="card_info_name">${title}</p>
              <p class="card_info_date">${time}</p>
              <p class="card_info_location">${location.city}</p>
              <p class="card_info_price">${price}</p>
            </div>
          </div>
        </li>`; 
  })
  ulCard.innerHTML = cards;
}

//export default eventsResults;