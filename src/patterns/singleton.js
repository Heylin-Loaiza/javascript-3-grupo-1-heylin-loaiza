const stateList= {
  favorites: [],
  interested: [],
  going: []
}

const singletonState = {
  getStateList(){
    return {...stateList}
  },

  addToList(list, event){
  stateList[list].push(event)
    this.saveStateList()
  },

  getList(list, id){
    const event = stateList[list].find((item) => item.id === id)
    return event
  },

  removeListEvents(list, event) {
    stateList[list] = stateList[list].filter((item) => item !== event)
    this.saveStateList()
  },

  saveStateList() {
    localStorage.setItem('stateList', JSON.stringify(stateList));
  },

  loadStateList() {
    const data = JSON.parse(localStorage.getItem('stateList'));
    
    if(data){stateList.favorites = data.favorites || [];
    stateList.interested = data.interested || [];
    stateList.going = data.going || [];
    this.saveStateList()}
  }
};


const state = Object.freeze(singletonState);
state.loadStateList()
export default state;