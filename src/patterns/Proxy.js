import {eventsResults} from "../api.js";
class CacheStorage {
  constructor (name){
    this.name = name;
    this.data = JSON.parse(localStorage.getItem(this.name)) || {}
  }

  addToCache( category, value){
    this.data[category] = value
    this.saveCache()
  }

  getCache(category){
    return this.data[category]
  }

  saveCache(){
    localStorage.setItem(this.name, JSON.stringify(this.data))
  }
}

const handler = {
  async get(data, category) {
    if (data.getCache(category) !== undefined) {
      return data.getCache(category);
    } 
    else {
      const fetch = await eventsResults(category);
      data.addToCache(category, fetch);
      return data.getCache(category);
    }
  },
};

const cache = new CacheStorage('cache')
const proxy = new Proxy(cache, handler);

export default proxy;