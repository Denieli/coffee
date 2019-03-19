<template>
  <div class="cof-foot-container">
    <!-- 底部导航栏 -->
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home" >
        <span>首页</span>
        <img slot="icon" slot-scope="props" :src="props.active ? baseUrl+home.active : baseUrl+home.normal">
      </van-tabbar-item>
      <van-tabbar-item to="/menu" >
        <span>菜单</span>
        <img slot="icon" slot-scope="props" :src="props.active ? baseUrl+menu.active : baseUrl+menu.normal">
      </van-tabbar-item>
      <van-tabbar-item to="/order">
        <span>订单</span>
        <img slot="icon" slot-scope="props" :src="props.active ? baseUrl+order.active : baseUrl+order.normal">
      </van-tabbar-item>
      <van-tabbar-item to="/shopcar" info="1">
        <span>购物车</span>
        <img slot="icon" slot-scope="props" :src="props.active ? baseUrl+shopcar.active : baseUrl+shopcar.normal">
      </van-tabbar-item>
      <van-tabbar-item to="/person">
        <span>我的</span>
        <img slot="icon" slot-scope="props" :src="props.active ? baseUrl+person.active : baseUrl+person.normal">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 0,
        baseUrl:"https://www.foreignkey.top/images/coffee/coffee/tabber/",
        home: {
          normal: 'home.png',
          active: 'home-fill.png'
        },
        menu: {
          normal: 'menu.png',
          active: 'menu-fill.png'
        },
        order: {
          normal: 'order.png',
          active: 'order-fill.png'
        },
        shopcar: {
          normal: 'shopcar.png',
          active: 'shopcar-fill.png'
        },
        person: {
          normal: 'person.png',
          active: 'person-fill.png'
        }
      }
    },
    methods:{
     
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
