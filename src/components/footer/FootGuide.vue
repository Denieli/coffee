<template>
  <div class="cof-foot-container">
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home">
        <span>首页</span>
        <img slot="icon" slot-scope="props" :src="props.active ? home.active : home.normal">
      </van-tabbar-item>
      <van-tabbar-item to="/menu">
        <span>菜单</span>
        <img slot="icon" slot-scope="props" :src="props.active ? menu.active : menu.normal">
      </van-tabbar-item>
      <van-tabbar-item to="/order">
        <span>订单</span>
        <img slot="icon" slot-scope="props" :src="props.active ? order.active : order.normal">
      </van-tabbar-item>
      <van-tabbar-item to="/shopcar" info="3">
        <span>购物车</span>
        <img slot="icon" slot-scope="props" :src="props.active ? shopcar.active : shopcar.normal">
      </van-tabbar-item>
      <van-tabbar-item to="/person">
        <span>我的</span>
        <img slot="icon" slot-scope="props" :src="props.active ? person.active : person.normal">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 0,
        home: {
          normal: 'https://www.foreignkey.top/images/coffee/coffee/tabber/home.png',
          active: 'https://www.foreignkey.top/images/coffee/coffee/tabber/home-fill.png'
        },
        menu: {
          normal: 'https://www.foreignkey.top/images/coffee/coffee/tabber/menu.png',
          active: 'https://www.foreignkey.top/images/coffee/coffee/tabber/menu-fill.png'
        },
        order: {
          normal: 'https://www.foreignkey.top/images/coffee/coffee/tabber/order.png',
          active: 'https://www.foreignkey.top/images/coffee/coffee/tabber/order-fill.png'
        },
        shopcar: {
          normal: 'https://www.foreignkey.top/images/coffee/coffee/tabber/shopcar.png',
          active: 'https://www.foreignkey.top/images/coffee/coffee/tabber/shopcar-fill.png'
        },
        person: {
          normal: 'https://www.foreignkey.top/images/coffee/coffee/tabber/person.png',
          active: 'https://www.foreignkey.top/images/coffee/coffee/tabber/person-fill.png'
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  .cof-foot-container {
    .van-tabbar-item__icon  {
      img{
        height: 27.4px;
      }
    }
    .van-tabber {
      height:53px !important;
      .van-tabbar-item,
      .van-tabbar-item--active {
        color: #82808b;
      }
    }

  }

</style>
