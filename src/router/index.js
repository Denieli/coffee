import Vue from 'vue'
import Router from 'vue-router'

import home from '../page/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:home},
    {path:"/home",component:home}
  ], 
  linkExactActiveClass:'van-tabbar-item--active'
})
