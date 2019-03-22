<template>
  <div class="conf-shopcar-container">
    <header-guide title="购物车" src="shopCar/shopCar_luckin.png"></header-guide>
    <section>
      <van-cell>
        <template slot="icon">
          <div class="conf-icon">
            <van-checkbox checked-color="#92b7da"  v-model="checked"></van-checkbox>
          </div>
        </template>
        <template slot="title">
          <div class="conf-title">
            <div class="conf-title-left">
              <h6>抹茶拿铁</h6>
              <span>大/热</span>
            </div>
            <div class="conf-title-right">
              <span class="conf-add">冲2赠1</span>
            </div>
          </div>
        </template>
        <template slot="right-icon">
          <div class="conf-right-icon">
            <div class="conf-right-icon-item">
              <div class="conf-money">￥27</div><a class="iconfont icon-reduce2"></a>
              <div class="conf-num">2</div><a class="iconfont icon-add"></a>
            </div>
          </div>
        </template>
      </van-cell>
      <van-cell>
        <template slot="icon">
          <div class="conf-icon">
            <van-checkbox checked-color="#92b7da"  v-model="checked"></van-checkbox>
          </div>
        </template>
        <template slot="title">
          <div class="conf-title">
            <div class="conf-title-left">
              <h6>抹茶拿铁</h6>
              <span>大/热</span>
            </div>
            <div class="conf-title-right">
              <span class="conf-add">冲2赠1</span>
            </div>
          </div>
        </template>
        <template slot="right-icon">
          <div class="conf-right-icon">
            <div class="conf-right-icon-item">
              <div class="conf-money">￥27</div><a class="iconfont icon-reduce2"></a>
              <div class="conf-num">2</div><a class="iconfont icon-add"></a>
            </div>
          </div>
        </template>
      </van-cell>
      <van-cell>
        <template slot="icon">
          <div class="conf-icon">
            <van-checkbox checked-color="#92b7da" v-model="checked"></van-checkbox>
          </div>
        </template>
        <template slot="title">
          <div class="conf-title">
            <div class="conf-title-left">
              <h6>抹茶拿铁</h6>
              <span>大/热</span>
            </div>
            <div class="conf-title-right">
              <span class="conf-add">冲2赠1</span>
            </div>
          </div>
        </template>
        <template slot="right-icon">
          <div class="conf-right-icon">
            <div class="conf-right-icon-item">
              <div class="conf-money">￥27</div><a class="iconfont icon-reduce2"></a>
              <div class="conf-num">2</div><a class="iconfont icon-add"></a>
            </div>
          </div>
        </template>
      </van-cell>
      <van-cell>
        <template slot="icon">
          <div class="conf-icon">
            <van-checkbox checked-color="#92b7da" v-model="checked"></van-checkbox>
          </div>
        </template>
        <template slot="title">
          <div class="conf-title">
            <div class="conf-title-left">
              <h6>小雪儿荔枝瑞纳冰</h6>
              <span>大/热</span>
            </div>
            <div class="conf-title-right">
              <span class="conf-add">冲2赠1</span>
            </div>
          </div>
        </template>
        <template slot="right-icon">
          <div class="conf-right-icon">
            <div class="conf-right-icon-item">
              <div class="conf-money">￥27</div><a class="iconfont icon-reduce2"></a>
              <div class="conf-num">2</div><a class="iconfont icon-add"></a>
            </div>
          </div>
        </template>
      </van-cell>

    </section>
    <div class="conf-other">
      <div class="conf-title">
        <div>猜你喜欢</div>
        <div class="conf-change">换一批</div>
      </div>
      <div class="conf-other-item">
        <div class="conf-bar">
          <div class="conf-coff"><img src="https://www.foreignkey.top/images/coffee/part5/america1.png" /></div>
          <h6>火腿芝士羊角</h6>
          <div><span class="conf-gray">Ham Cheese Crois</span></div>
          <div class="conf-info"><span class="conf-red">￥10.56</span> <del>￥16</del><span class="iconfont icon-add"></span></div>
        </div>
        <div  class="conf-bar">
          <div class="conf-coff"><img src="https://www.foreignkey.top/images/coffee/part5/america1.png" /></div>
          <h6>火腿芝士羊角</h6>
          <div><span class="conf-gray">Ham Cheese Crois</span></div>
          <div class="conf-info"><span class="conf-red">￥10.56</span> <del>￥16</del><span class="iconfont icon-add"></span></div>
        </div>
        <div  class="conf-bar">
          <div class="conf-coff"><img src="https://www.foreignkey.top/images/coffee/part5/america1.png" /></div>
          <h6>火腿芝士羊角</h6>
          <div><span class="conf-gray">Ham Cheese Crois</span></div>
          <div class="conf-info"><span class="conf-red">￥10.56</span> <del>￥16</del><span class="iconfont icon-add"></span></div>
        </div>
      </div>
    </div>
    <div></div>
    <div class="conf-sum">
      <div class="conf-sum-item">应付合计<span class="conf-money">￥243</span></div>
      <div class="conf-sum-item">
        <van-button type="default">去结算</van-button>
      </div>
    </div>
    <foot-guide :activeId="activeId"></foot-guide>
  </div>
</template>
<script>
  import footGuide from '../../components/footer/FootGuide.vue'
  import header from '../../components/header/header.vue'
  export default {
    data() {
      return {
        activeId: 3,
        checked: true
      }
    },
    components: {
      'header-guide': header,
      'foot-guide': footGuide
    }
  }

</script>
<style lang="scss" scoped>
  .conf-shopcar-container {
    height: 100%;
    box-sizing: border-box;
    margin-bottom: 50px;

    .van-cell {
      height: 73px;

      .conf-icon {
        position: relative;
        flex: 0 0 20px;

        .van-checkbox {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
      }

      .conf-title {
        padding: 0 11px 0 20px;
        display: flex;

        .conf-title-left {
          h6 {
            font-size: 16px;
            margin: 0;
            font-weight: 900;
          }

          span {
            font-size: 10px;
            margin: 0;
          }
        }

        .conf-title-right {
          margin-left: 11px;

          .conf-add {
            background-color: #de680d;
            color: #fff;
            font-size: 12px;
          }
        }

      }

      .conf-right-icon {
        position: relative;


        .conf-right-icon-item {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 0;
          display: flex;

          .conf-money {
            margin-right: 8px;
          }

          .conf-num {
            margin-right: 8px;
          }

          .icon-add {
            font-size: 24px;
            color: #92b7da;
          }

          .icon-reduce2 {
            font-size: 24px;
            color: #92b7da;
            margin-right: 8px;
          }
        }

      }

     
    }

    .conf-sum {
      z-index: 2;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      position: fixed;
      bottom: 50px;
      left: 0;
      right: 0;
      height: 60px;

      .conf-sum-item {
        display: flex;
        align-items: center;
        padding-left: 15px;
        font-size: 13px;

        .conf-money {
          font-size: 18px;
          font-weight: 500;
        }

        .van-button--default {
          width: 136px;
          height: 60px;
          background-color: #7aa7d0;
          color: #fff;
        }

      }
    }

    .conf-other {
      background-color: #f7f7f7;
      margin-bottom: 60px;
      box-sizing: border-box;

      .conf-title {
        display: flex;
        justify-content: spacing-between;
        height: 40px;
        align-items: center;
        padding: 0 10px;

        div {
          flex: 1;
        }

        .conf-change {
          display: flex;
          justify-content: flex-end;
        }
      }

      .conf-other-item {
        border-radius: 10px 10px 0 0;
        font-size: 12px;
        padding-left: 6px;
        box-sizing: border-box;
        display :flex;
        justify-content: space-around;
        padding-bottom: 15px;
        padding-left: 6px;
        .conf-bar{
          flex:0 0 110px;
          background-color: #fff;
        }
        .conf-coff {
          width: 110px;
          height: 110px;
          padding-left: -6px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }

        h6 {
          margin: 8px 0;
          ;
        }

        .conf-gray {
          color: #b3b3b3;
        }

        .conf-red {
          color: #e36451;
        }

        .icon-add {
          font-size: 24px;
          color: #92b7da;
        }
        .conf-info{
          display: flex;
          justify-content: space-between;
          align-items:center;
        }
      }

    }
  }

</style>
