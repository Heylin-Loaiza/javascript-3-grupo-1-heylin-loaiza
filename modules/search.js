const searchJokes = async function(word){
  const response = await fetch(`https://icanhazdadjoke.com/search?term=${word}`,
    {headers: {
      'Accept': 'application/json'
    }
  });
  const data = await response.json(); 
  const jokeBox = document.querySelector('#jokeBox');
  data.results < 1 ? jokeBox.innerHTML = `<p class="joke-text">No hubo resultados</p>` :
  jokeBox.innerHTML = `${data.results.map(joke => `<p class="joke-text">${joke.joke}</p>`).join('')}` 
}

const button = document.querySelector('#searchJoke')

button.addEventListener('click', function(e){
  const input = document.querySelector('#input').value
  e.preventDefault()
  input === '' ? null : searchJokes(input)
})

export {searchJokes}
