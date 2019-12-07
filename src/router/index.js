import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Fl from '../views/Fl.vue';
import Cart from '../views/Cart.vue';
import Me from '../views/Me.vue';
import Dl from '../views/denglu/Denglu.vue';
import Yh from '../views/denglu/Youhui.vue';
import Qx from '../views/denglu/Quanxian.vue';
import DDl from '../views/denglu/Love.vue';
import Dh from '../views/denglu/Happy.vue';
import De from '../views/denglu/Elder.vue';





import index from '../views/index.vue'
import DGemini from '../views/denglu/Gemini.vue';


Vue.use(VueRouter);

const routes = [{
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
      },
    ],
  },
  {
    path: '/denglu',
    name: 'Denglu',
    component: Dl,
  },
  {
    path: '/youhui',
    name: 'Youhui',
    component: Yh,
  },
  {
    path: '/quanxian',
    name: 'Quanxian',
    component: Qx,
  },
  {
    path: '/l',
    name: 'DL',
    component: Dl,
  },
  {
    path: '/h',
    name: 'DH',
    component: Dh,
  },
  {
    path: '/e',
    name: 'DDL',
    component: DDl,
  },
  {
    path: '/e',
    name: 'DE',
    component: De,
  },
  {
    path: '/d_g',
    name: 'DGemini',
    component: DGemini,
  },
];

const router = new VueRouter({
  routes,
});

export default router;