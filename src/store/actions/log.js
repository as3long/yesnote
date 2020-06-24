import { api, md5 } from '../../api/index';

export default {
  login({ commit }, { username, password }) {
    api
      .post('/?s=App.User.Login', {
        username,
        password: md5(password)
      })
      .then((res, err) => {
        commit('login', res.data.data);
      });
  },
  regist({ commit }, { username, password }) {
    api
      .post('/?s=App.User.Register', {
        username,
        password: md5(password)
      })
      .then((res, err) => {
        commit('regist', res.data.data);
      });
  },
  resetToast({ commit }) {
    commit('resetToast');
  }
};
