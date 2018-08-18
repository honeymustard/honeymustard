/**
 * Fetches data from routes and applies caching.
 */
class API {
  cacheTime() {
    return 60 * 60 * 24 * 7 * 1000;
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
    if (!this.expired(key)) {
      return JSON.parse(localStorage.getItem(key));
    }

    return null;
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
    let url = this.prefix(route);

    return fetch(url, {
      Accept: 'application/json',
    })
    .then(resp => resp.json())
    .then((data) => {
      this.save(data, route);
      return data;
    });
  }
}

export default API;
