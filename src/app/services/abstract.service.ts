import axios from 'axios';
import Promise from 'bluebird';

export default class AbstractService {
  private _config: any;

  constructor(config = {}) {
    this._config = config;
    // tslint:disable-next-line:no-shadowed-variable
    axios.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      config.headers['Authorization'] = token;
      return config;
    }, error => Promise.reject(error));
   }

  $get(endpoint, payload = {}, config = {}) {
    return Promise.resolve(axios.get(endpoint, Object.assign({ params: payload }, this._config, config)));
  }

  $post(endpoint, payload = {}, config = {}) {
    return Promise.resolve(axios.post(endpoint, payload, Object.assign(this._config, config)));
  }

  $put(endpoint, payload = {}, config = {}) {
    return Promise.resolve(axios.put(endpoint, payload, Object.assign(this._config, config)));
  }

  $patch(endpoint, payload = {}, config = {}) {
    return Promise.resolve(axios.patch(endpoint, payload, Object.assign(this._config, config)));
  }

  $delete(endpoint, config = {}) {
    return Promise.resolve(axios.delete(endpoint, Object.assign(this._config, config)));
  }

  $head(endpoint, config = {}) {
    return Promise.resolve(axios.head(endpoint, Object.assign(this._config, config)));
  }

  $all(endpoints) {
    return Promise.all(endpoints);
  }
}
