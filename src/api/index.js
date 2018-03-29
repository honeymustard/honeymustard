/**
 * Fetches data from routes and applies caching.
 */
class API {

  cacheTime() {
    return 24 * 60 * 60 * 1000;
  }

  expired(key) {
    let time = localStorage.getItem(`updated-${key}`);

    if (time) {
      let a = JSON.parse(time) + this.cacheTime();
      let b = new Date().getTime();
      return a < b;
    }

    return true;
  }

  load(key) {
    return !this.expired(key) ? localStorage.getItem(key) : null;
  }

  save(data, key) {
    localStorage.setItem(`updated-${key}`, JSON.stringify(Date.now()));
    localStorage.setItem(key, JSON.stringify(data));
  }

  prefix(route) {
    if (route.indexOf('/api/') !== 0) {
      return `/api/${route}`;
    }
    return route;
  }

  get(route) {
    route = this.prefix(route);
    let data = this.load(route);

    if (data) {
      return new Promise((resolve, reject) => {
        resolve(JSON.parse(data));
      });
    }

    return this.fetch(route);
  }

  fetch(route) {
    route = this.prefix(route);

    return fetch(route, {
      Accept: 'application/json',
    })
    .then(resp => resp.json())
    .then(data => {
      this.save(data, route);
      return data;
    });
  }
}

export default API;
