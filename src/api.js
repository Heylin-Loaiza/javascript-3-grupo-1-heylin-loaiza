const randomJokes = async function (){
  const response = await fetch("https://icanhazdadjoke.com/",
    {headers: {
      'Accept': 'application/json'
    }
  });
  const data = await response.json();
  return data
}

const searchJokes = async function(word){
  const response = await fetch(`https://icanhazdadjoke.com/search?term=${word}`,
    {headers: {
      'Accept': 'application/json'
    }
  });
  const data = await response.json(); 
  return data
}

const idJokes = async function(id){
  const response = await fetch(`https://icanhazdadjoke.com/j/${id}`,
    {headers: {
      'Accept': 'application/json'
    }
  });
  const data = await response.json(); 
  return data
}


export {randomJokes, searchJokes, idJokes}