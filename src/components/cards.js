const ulCard = document.getElementById('ul__card');

function renderCards(data, category) {
  let cards = '';
  data.forEach(element => {
    const { id, title, image, date, location, price } = element;
    const time = new Date(date);
    cards += `
      <li class="card">
        <div class="card__wrapper">
          <img class="card__img" src="${image}" alt="">
          <Button class="fav-btn">fav</Button>
          <div class="card__info">
            <p class="card_info_name">${title}</p>
            <p class="card_info_date">${time}</p>
            <p class="card_info_location">${location.city}</p>
            <p class="card_info_price">${price}</p>
          </div>
        </div>
        <div class="btn">
          <Button value="${id}" data-category="${category}" class="interested__btn event__btn">Interested</Button>
          <Button value="${id}" data-category="${category}" class="event__btn event__btn--bg">Going</Button>
        </div>
      </li>`;
  })
  ulCard.innerHTML = cards;
}

export default renderCards;