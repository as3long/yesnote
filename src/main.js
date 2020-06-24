import Vue from 'vue';
import Vuex from 'vuex';
/* -----  vant component start  ----- */
import Vant from 'vant';
/* -----  vant component end  ----- */

import App from './App.vue';
import store from './store/index';

/* -----  vant style start  ----- */
import 'vant/lib/index.css';
import router from './router';
/* -----  vant style end  ----- */

Vue.use(Vant);
Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
