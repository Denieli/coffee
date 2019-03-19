import Vue from 'vue'
import Router from 'vue-router'

import home from '../page/home/home.vue'
import menu from '../page/menu/menu.vue'
import order from '../page/order/order.vue'
import shopcar from '../page/shopcar/shopCar.vue'
import person from '../page/person/person.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:home},
    {path:"/home",component:home},
    {path:"/menu",component:menu},
    {path:"/order",component:order},
    {path:"/shopcar",component:shopcar},
    {path:"/person",component:person},
  ], 
  linkExactActiveClass:'van-tabbar-item--active'
})
