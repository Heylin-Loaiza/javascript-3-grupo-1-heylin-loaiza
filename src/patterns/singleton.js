//let favoritesList = [];
let interestedList = [];
// let goingList = [];

const state = {
  // getFavorites() {
  //   return favoritesList;
  // },

  // addFavorite(event) {
  //   favoritesList.push(event);
  //   saveFavorites();
  // },

  // removeFavorite(event) {
  //   favoritesList = favoritesList.filter((item) => item !== event)
  //   saveFavorites()
  // },

  // saveFavorites() {
  //   localStorage.setItem('favorites', JSON.stringify(favoritesList));
  // },

  // loadFavorites() {
  //   const favoritesData = localStorage.getItem('favorites');
  //   if (favoritesData) {
  //     favoritesList = JSON.parse(favoritesData);
  //   }
  // },

  /// Interested ///
  getInterested(){
    return interestedList;
  },

  addInterested(event){
    interestedList.push(event)
    saveInterested()
  },
  removeFavorite(event) {
    interestedList = interestedList.filter((item) => item !== event)
    saveInterested()
  },

  saveInterested() {
    localStorage.setItem('favorites', JSON.stringify(interestedList));
  },

  loadInterested() {
    const interestedData = localStorage.getItem('favorites');
    if (interestedData) {
      interestedList = JSON.parse(interestedData);
    }
  },
}

const method = Object.freeze(state);

export default method;

////////  EJEMPLO  STORAGE ////////
// form.addEventListener('submit', function(event) {
//   event.preventDefault(); 
//   validacionForm();

//   user.name = nameUser.value;

//   sessionStorage.setItem('user', JSON.stringify(user));

//   signup.innerHTML = `Bienvenid@, ${user.name}!`
//   modal.style.display = 'none'
// });

// (function verificar(){
//   const userJSON = sessionStorage.getItem('user');

// if (userJSON) {
//   const user = JSON.parse(userJSON);
//   signup.innerHTML = `Bienvenid@, ${user.name}`
// }
// })();
