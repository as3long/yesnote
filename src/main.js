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

import Default from './layouts/Default.vue';
import TabBar from './layouts/Tabbar.vue';

Vue.use(Vant);
Vue.use(Vuex);

Vue.component('default-layout', Default);
Vue.component('tabbar-layout', TabBar);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
