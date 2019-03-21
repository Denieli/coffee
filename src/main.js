// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


import {Tabbar,TabbarItem} from 'vant';
Vue.use(Tabbar).use(TabbarItem);
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
import { TreeSelect } from 'vant';
Vue.use(TreeSelect);
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);
import { NavBar } from 'vant';
Vue.use(NavBar);

import store from './store'
import './mock/mockServer'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c=>c(App),
  store
 
})
