class Publisher {
  constructor(){
    this.subscribers = [];
  }
  
  subscribe (fn) {
    this.subscribers.push(fn);
  }

  notify(data) {
    this.subscribers.forEach(function(subscriber){
      subscriber(data);
    })
  }
}

export default Publisher