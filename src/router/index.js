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
import Zhuce from '../views/denglu/zhuce.vue'
import Yuer from '../views/denglu/yuer.vue'
import Huiyuan from '../views/denglu/Huiyuan.vue'
import Shouhuo from '../views/denglu/Shouhuo.vue'
import Dizhi from '../views/denglu/Dizhi.vue'
import Youxiang from '../views/denglu/youxiang.vue'
import shoujidenglu from '../views/denglu/shoujidenglu.vue'
import Shengri from '../views/denglu/shengri.vue'

import Shoucang from '../views/denglu/shoucang.vue'
import Liulanjilu from '../views/denglu/liulanjilu.vue'

import Kefu from '../views/denglu/kefu.vue'
import Shezhi from '../views/denglu/shezhi.vue'





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
    meta: {
      isLogin: true
    }

  },
  {
    path: '/quanxian',
    name: 'Quanxian',
    component: Qx,
    meta: {
      isLogin: true
    }
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
  }, {
    path: '/zhuce',
    name: "Zhuce",
    component: Zhuce
  }, {
    path: '/yuer',
    name: "Yuer",
    component: Yuer,
    meta: {
      isLogin: true
    }
  }, {
    path: '/huiyuan',
    name: "Huiyuan",
    component: Huiyuan,
    meta: {
      isLogin: true
    }
  }, {
    path: '/shouhuo',
    name: "Shouhuo",
    component: Shouhuo,
    meta: {
      isLogin: true
    }
  }, {
    path: '/dizhi',
    name: "Dizhi",
    component: Dizhi

  }, {
    path: '/youxiang',
    name: "Youxiang",
    component: Youxiang,

  }, {
    path: '/shoujidenglu',
    name: "shoujidenglu",
    component: shoujidenglu,

  }, {
    path: '/shengri',
    name: "shengri",
    component: Shengri,
    meta: {
      isLogin: true
    }
  }, {
    path: '/shoucang',
    name: "shoucang",
    component: Shoucang,
    meta: {
      isLogin: true
    }
  }, {
    path: '/liulanjilu',
    name: "liulanjilu",
    component: Liulanjilu,
    meta: {
      isLogin: true
    }
  }, {
    path: '/kefu',
    name: "Kefu",
    component: Kefu,
    meta: {
      isLogin: true
    }
  }, {
    path: '/shezhi',
    name: "shezhi",
    component: Shezhi,
    meta: {
      isLogin: true
    }
  }
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.isLogin) {
    if (localStorage.getItem("token")) {
      next()
    } else {
      next({
        name: "Denglu"
      })
    }
  } else {
    next()
  }
})
export default router;