import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';
import Fl from '../views/Fl.vue';
import Me from '../views/Me.vue';
import Dl from '../views/denglu/Denglu.vue';
import index from '../views/index.vue'

Vue.use(VueRouter);

const routes = [

  {
    path: '/',
    name: 'Index',
    redirect: '/home',
    component: index,

    children: [{
        path: '/home',
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

      }
    ]
  }, {
    path: '/denglu',
    name: 'Denglu',
    component: Dl,
  },

];

const router = new VueRouter({

  routes,
});

export default router;