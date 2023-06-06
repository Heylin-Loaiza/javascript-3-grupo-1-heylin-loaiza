import { randomJokes } from '../api.js';

const generatorDadJokes = function (){
  const jokeCard = document.querySelector('#jokeCard');
  const button = document.querySelector('#reload-btn');

  button.addEventListener("click", async function(e){
    e.preventDefault()
    const joke = await randomJokes()
    jokeCard.innerHTML = `<a href="../store.html?jokeid=${joke.id}" class="joke-text" class="joke-text anchorJoke">${joke.joke}</a>`
  })
}

export default generatorDadJokes;