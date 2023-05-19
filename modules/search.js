import { searchJokes } from "./api.js";

const searchBtn = function(){
  const button = document.querySelector('#searchJoke');
  const jokeBox = document.querySelector('#jokeBox');

  button.addEventListener('click', async function(e){
    e.preventDefault()
    const input = document.querySelector('#input').value
    const jokeResults = input !== '' ? await searchJokes(input) : null

    jokeResults.results < 1 ? jokeBox.innerHTML = `<p class="joke-text">No hubo resultados</p>` :
    jokeBox.innerHTML = `${jokeResults.results.map(joke => `<a href="../store.html" class="joke-text">${joke.joke}</a>`).join('')}` 
  })
}

export default searchBtn