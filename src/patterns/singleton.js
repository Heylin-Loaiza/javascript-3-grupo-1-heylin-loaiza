//let favoritesList = [];
let interestedList = [];
// let goingList = [];

const singletonState = {
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
    this.saveInterested()
  },
  removeInterested(event) {
    interestedList = interestedList.filter((item) => item !== event)
    this.saveInterested()
  },

  saveInterested() {
    localStorage.setItem('interested', JSON.stringify(interestedList));
  },

  loadInterested() {
    const interestedData = localStorage.getItem('interested');
    if (interestedData) {
      interestedList = JSON.parse(interestedData);
    }
  },
}

const state = Object.freeze(singletonState);
state.loadInterested()
export default state;

