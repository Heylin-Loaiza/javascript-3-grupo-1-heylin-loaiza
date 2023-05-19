import { randomJokes } from "./api.js";

const generatorDadJokes = function (){
  const jokeCard = document.querySelector('#jokeCard');
  const button = document.querySelector('#reload-btn');

  button.addEventListener("click", async function(){
    const joke = await randomJokes()
    jokeCard.innerHTML = `<a href="../store.html" class="joke-text">${joke.joke}</a>`
  })
}

export default generatorDadJokes;