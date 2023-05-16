const dadJokes = async function (){
  const response = await fetch("https://icanhazdadjoke.com/",
    {headers: {
      'Accept': 'application/json'
    }
  });
  const data = await response.json();
  randomJokes(data.joke)
}

function randomJokes (joke){
  const jokeCard = document.querySelector('#jokeCard');
  const button = document.querySelector('#reload-btn');

  button.addEventListener("click", function(){
    dadJokes()
    jokeCard.innerHTML = `<p class="joke-text">${joke}</p>`
  })
}

export {dadJokes}