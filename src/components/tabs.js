import {categories, accountCategories} from '../config.js';

const divTabs = document.getElementById('tabs-menu');

function renderTabs(category, name) {
  let btn = `
  <button data-id="${category}" class="tabs tabs-js">${name}</button>`
  divTabs.insertAdjacentHTML('beforeend', btn) 
  stylesBtn()
}

function indexTabs(){
  categories.forEach( element => {
    const {name , category} = element;
    renderTabs(category, name)
  })
}

function accountTabs() {
  accountCategories.forEach( element => {
    const {name , category} = element;
    renderTabs(category, name)
  })
}

function stylesBtn(){
  const btnTabs = document.querySelector('.tabs');
  
}
export {indexTabs, accountTabs}