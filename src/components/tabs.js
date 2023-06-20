import categories from '../config.js';

const navegation = document.getElementById('nav');

function renderTabs(start, end) {
  let btn = '';
  const categoriesToShow = categories.slice(start, end);
  categoriesToShow.forEach(element => {
    const {name , category} = element;
    btn += `
    <button data-id="${category}" class="tabs">${name}</button>`
  });
  navegation.insertAdjacentHTML('beforeend', btn) 
}

export default renderTabs