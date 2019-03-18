import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/container/Home.vue'
import menu from '../components/container/Menu.vue'
import order from '../components/container/Order.vue'
import shopcar from '../components/container/ShopCar.vue'
import person from '../components/container/Person.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:home},
    {path:"/home",component:home},
    {path:"/menu",component:menu},
    {path:"/order",component:order},
    {path:"/shopcar",component:shopcar},
    {path:"/person",component:person}
  ]
})
