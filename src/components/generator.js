import { randomJokes } from '../api.js';

const generatorDadJokes = function (){
  const jokeCard = document.querySelector('#jokeCard');
  const button = document.querySelector('#reload-btn');

  button.addEventListener("click", async function(){
    const {id, joke} = await randomJokes()
    jokeCard.innerHTML = `<a href="../store.html?jokeid=${id}" class="joke-text" class="joke-text anchorJoke">${joke}</a>`
  })
}

export default generatorDadJokes;