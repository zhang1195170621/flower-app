import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Fl from '../views/Fl.vue';
import Cart from '../views/Cart.vue';
import Me from '../views/Me.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/f',
    name: 'Fl',
    component: Fl,
  },
  {
    path: '/c',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/m',
    name: 'Me',
    component: Me,
  },
  {
    path: '/l',
    name: 'DL',
    component: () => import('../views/Denglu/Love.vue'),
  },
  {
    path: '/h',
    name: 'DH',
    component: () => import('../views/Denglu/Happy.vue'),
  },
  {
    path: '/e',
    name: 'DE',
    component: () => import('../views/Denglu/Elder.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
