import method from '../patterns/singleton.js';

function prueba(){
  const favBtn = document.getElementById('fav-btn');
  favBtn.addEventListener('click', (e) => {
    const c = e.target.dataset.id
    console.log(c)
    //method.addFavorite(c)
  })
}

export {
  prueba
}
