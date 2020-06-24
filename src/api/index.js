const axios = require('axios');
// const utils = require('axios/lib/utils');
const md5 = require('blueimp-md5');

const instance = axios.create({
  baseURL: 'http://141.164.42.156:30032/proxy',
});

const userState = {
  uuid: '',
  token: '',
};

// instance.interceptors.request.use(
//   config => {
//     config.params = enryptData(config.params, config.data);
//     if (config.params.uuid === '') {
//       delete config.params.uuid;
//     }
//     if (config.params.token === '') {
//       delete config.params.token;
//     }
//     return config;
//   },
//   error => Promise.reject(error)
// );

module.exports = {
  api: instance,
  userState,
  md5,
};
