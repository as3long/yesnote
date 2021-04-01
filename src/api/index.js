import axios from 'axios';
import md5 from 'blueimp-md5';
import store from '../store/index';

const instance = axios.create({
  baseURL: 'http://141.164.42.156:30032/proxy',
  // baseURL: 'http://127.0.0.1:30032/proxy',
});

instance.interceptors.request.use(
  config => {
    console.log(store);
    config.params = config.params || {};
    if (store.state.userState.uuid !== '') {
      config.params.uuid = store.state.userState.uuid;
      if (config.data && config.data.data) {
        config.data.data.muuid = store.state.userState.uuid;
      }
    }
    if (store.state.userState.token !== '') {
      config.params.token = store.state.userState.token;
    }
    return config;
  },
  error => Promise.reject(error)
);

const api = instance;

export {
  api,
  md5,
};
