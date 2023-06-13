import {eventsResults} from "../api.js";

const cache = {};

const handler = {
  get(data, category) {
    if (!data[category]) {
      data[category] = eventsResults(category);
    }
    return data[category];
  }
};

const proxy = new Proxy(cache, handler);

export default proxy;