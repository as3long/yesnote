import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import Regist from '../views/Regist.vue';
import NoteList from '../views/NoteList.vue';
import AddNote from '../views/AddNote.vue';
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: NoteList,
    meta: {
      layout: 'tabbar'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/regist',
    name: 'Regist',
    component: Regist,
  },
  {
    path: '/notelist',
    name: 'NoteList',
    component: NoteList,
    meta: {
      layout: 'tabbar'
    }
  },
  {
    path: '/addnote',
    name: 'AddNote',
    component: AddNote,
  },
];

const route = new VueRouter({
  mode: 'history',
  routes,
});

route.beforeEach((to, from, next) => {
  console.log(to.path);
  if (store.state.userState.uuid === '') {
    if (to.path !== '/login' && to.path !== '/regist') {
      next({ path: '/login' });
    }
  }
  next();
});

export default route;
