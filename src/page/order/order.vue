<template>
  <div class="conf-order-container">
    <header-guide title="订单列表"></header-guide>
    <van-tabs color="#86aed1" line-width="31" title-active-color="#86aed1">
      <van-tab title="全部">
      <order-list></order-list>
      </van-tab>
      <van-tab title="未完成"> <order-list></order-list></van-tab>
      <van-tab title="已完成"> <order-list></order-list></van-tab>
    </van-tabs>
    <div class="conf-bg"><img src="https://www.foreignkey.top/images/coffee/coffee/order/sendcoffee.png" alt=""></div>
    <!-- 底部导航栏 -->
    <foot-guide :activeId="activeId"></foot-guide>
  </div>
</template>
<script>
  import footGuide from '../../components/footer/FootGuide.vue'
  import header from '../../components/header/header.vue'
  import orderlist from '../../components/order/orderlist.vue'
  export default {
    data() {
      return {
        activeId: 2
      }
    },
    components: {
      'foot-guide': footGuide,
      'header-guide': header,
      'order-list':orderlist
    }
  }

</script>
<style lang="scss" scoped>
  .conf-order-container {
    background-color: #f2f2f2;
    .conf-bg{
      width:70px;
      position: absolute;
      bottom:50px;
      left:50%;
      img{
        width:100%;
      }
    }
  }

</style>
