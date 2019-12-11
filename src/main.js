import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue';
import router from './router';
import './font/iconfont.css';
import {
  Row,
  Col
} from 'vant';
import axios from 'axios'


Vue.use(Row).use(Col);

Vue.use(Vant);
Vue.use(axios);

Vue.config.productionTip = false;

new Vue({
  router,

  render: h => h(App),
}).$mount('#app');