import Vue from 'vue';
import Vuex from 'vuex';
import { mutations, STORAGE_KEY } from './mutations';
import actions from './actions/index';
import plugins from './plugins';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),
    userState: {
      uuid: localStorage.getItem('uuid') || '',
      token: localStorage.getItem('token') || '',
    },
    toastText: '',
    redirect: '',
  },
  actions,
  mutations,
  plugins,
});
