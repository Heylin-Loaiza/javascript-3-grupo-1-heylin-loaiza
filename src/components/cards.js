const ulCard = document.getElementById('ul__card');

function renderCards(data) {
  let cards = '';
  data.forEach(element => {
    const { id, title, image, date, location, price } = element;
    const time = new Date(date);
    cards += `
        <li class="card" data-id=${id}>
          <div class="card__wrapper">
            <img class="card__img" src="${image}" alt="">
            <div class="card__info">
              <p class="card_info_name">${title}</p>
              <p class="card_info_date">${time}</p>
              <p class="card_info_location">${location.city}</p>
              <p class="card_info_price">${price}</p>
            </div>
          </div>
          <button id="fav-btn">fav</button>
        </li>`; 
  })
  ulCard.innerHTML = cards;
}

export default renderCards;