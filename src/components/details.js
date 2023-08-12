import { description } from '../api.js';

const containerInfo = document.getElementById('info__plant');

const getDescription = async (plantObj) => {
  const plantDescription = await description(`${plantObj.name}`);
  const descriptionText = ` <p>${plantDescription.description}</p>`;
  return descriptionText;
};

const getCaringTips = async (plantObj) => {
  const plantDescription = await description(`${plantObj.name}`);
  const { light, water, humidity, temperature } = plantDescription.care;
  const descriptionText = `
  <li>${light}</li>
  <li>${water}</li>
  <li>${humidity}</li>
  <li>${temperature}</li>`;
  return descriptionText;
};

const createMenu = async () => {
  const descriptionPlant = await getDescription();
  const CaringTips = await getCaringTips();
  containerInfo.insertAdjacentHTML(
    'beforeend',
    `<ul id="menu" class="menu">
      <li class="dropdownStore">
          <a href="#">Price Breakdown</a>
          <div class="dropdown-content">
            ${priceContent()}
          </div>
        </li>
        <li class="dropdownStore">
          <a href="#">Inventory alerts</a>
          <div class="dropdown-content">
          <!-- Contenido del desplegable -->
          </div>
        </li>
        <li class="dropdownStore">
          <a href="#">Plant description</a>
          <div class="dropdown-content">
          ${descriptionPlant}
          </div>
        </li>
        <li class="dropdownStore">
          <a href="#">Caring tips</a>
          <ul class="dropdown-content">
            ${CaringTips}
          </ul>
      </li>
    </ul>`,
  );
};

export { getDescription, getCaringTips, createMenu };

// function dropdown() {
//   const dropdownItems = document.querySelectorAll('.dropdownStore');

//   dropdownItems.forEach((item) => {
//     const dropdownContent = item.querySelector('.dropdown-content');
//     const arrowIcon = item.querySelector('.arrow-icon');

//     item.addEventListener('click', () => {
//       dropdownContent.classList.toggle('show');
//       arrowIcon.classList.toggle('rotate');
//     });
//   });
// }
// dropdown()
