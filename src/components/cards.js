const divCard = document.getElementById('div__card');

function renderCards(data) {
  let cards = '';
  const ul = document.createElement('ul');
  ul.classList.add('card__container');

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
  ul.innerHTML = cards;
  divCard.appendChild(ul);
}

export default renderCards;