async function dadJokes(){
  const response = await fetch("https://icanhazdadjoke.com/",
    {headers: {
      'Accept': 'application/json'
    }
  });
  const data = await response.json();
  randomJokes(data.joke)
}
dadJokes()

function randomJokes (joke){
  const jokeCard = document.querySelector('.jokeCard');
  const button = document.querySelector('#reload-btn');

  button.addEventListener("click", function(){
    dadJokes()

    jokeCard.innerHTML = `<p class="joke-text">${joke}</p>`
  })
}

const button = document.querySelector('#searchJoke')

button.addEventListener('click', function(e){
  const input = document.querySelector('#input').value
  e.preventDefault()
  searchJokes(input)
})

async function searchJokes(word){
  const response = await fetch(`https://icanhazdadjoke.com/search?term=${word}`,
    {headers: {
      'Accept': 'application/json'
    }
  });
  const data = await response.json(); 
  
  const container3 = document.querySelector('#container3')
  container3.innerHTML = `
  ${data.results.map(joke => `<p class="joke-text bg-color">${joke.joke}</p>`).join('')}`
  
}
