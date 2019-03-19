<template>
  <div class="cof-menu-container">
    <van-nav-bar title="选择咖啡与小食" fixed />
    <div class="conf-zz"><img src="https://www.foreignkey.top/images/coffee/coffee/menu/menu-zz.png" /></div>
    <!-- 分类 -->
    <div class="conf-wapper">
      <div class="conf-menu-wapper">
        <ul>
          <li class="conf-menu-item current"><span>零度拿铁</span></li>
          <li class="conf-menu-item " v-for="(item,index) in menu"><span>{{item}}</span></li>
        </ul>
      </div>
      <!-- 咖啡列表 -->
      <div class="conf-coffee-wapper">

        <ul>
          <li class="conf-coffee-item-title">
            <div>

            </div>
          </li>
          <li class="conf-coffee-item-content">
            <div class="conf-content-left">
              <div class="conf-coffee-logo"> <img src="https://www.foreignkey.top/images/coffee/part5/america1.png" /></div>
              <span class="conf-pag"></span>
            </div>
            <div class="conf-content-right">
              <h6>榛果拿铁</h6>
              <p>Hazelnut Latte</p>
              <p>默认：大/单糖/热</p>
              <div class="conf-number">
                <div class="conf-money">￥27</div>
                <div><a class="conf-num"><span></span></a></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 底部导航栏 -->
    <foot-guide></foot-guide>
  </div>
</template>
<script>
  import footGuide from '../../components/footer/FootGuide.vue'
  export default {
    data() {
      return {
        baseUrl: "https://www.foreignkey.top/images/coffee/part5/",
        menu: ["人气Top", "大师咖啡", "零度拿铁", "瑞纳冰", "鲜榨果蔬汁", "经典饮品", "BOSS午餐", "健康轻食", "幸运小食"],
        coffeeImg: []
      };
    },
    methods: {

    },
    components: {
      'foot-guide': footGuide
    }
  }

</script>
<style lang="scss" scoped>
  .cof-menu-container {
    .conf-zz {
      margin-top: 46px;

      img {
        width: 100%;
      }
    }

    .conf-wapper {
      text-align: center;
      display: flex;
      justify-content: space-between;

      .conf-menu-wapper {
        width: 90px;
        background: #f7f7f7;
        color: #5c5c5c;
        font-size: 14px;
        height: 100%;
        overflow: scroll;
        margin-bottom: 50px;

        .conf-menu-item {
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .current {
          color: #242424;
          background: #fff;
          font-weight: 600;
          font-size: 15px;
        }

        .conf-menu-item::after {
          content: ' ';
          position: absolute;
          pointer-events: none;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          left: 0;
          right: 0;
          bottom: 0;
          -webkit-transform: scaleY(.5);
          transform: scaleY(.5);
          border-bottom: 1px solid #ececec;
        }
      }

      .conf-coffee-wapper {
        flex-grow: 2;

        .conf-coffee-item-content {
          display: flex;
          justify-content: space-between;
          padding-left: 12px;
          padding-right: 15px;

          .conf-content-left {
            .conf-coffee-logo {
              width: 74px;
              height: 74px;

              img {
                width: 100%;
                height: 100%;
                border-radius: 10%;
              }
            }

            .conf-pag {}
          }

          .conf-content-right {
            flex-grow: 2;
            text-align: left;

            h6 {
              font-size: 16px;
              line-height: 16px;
              height: 16px;
              color: #3d3d3d;
              box-sizing:border-box;
            }

            p {
              font-weight: 8px;
              line-height: 8px;
              height: 8px;
              color: #b1b1b1;
              box-sizing:border-box;
            }

            .conf-number {
              font-size: 10px;
              line-height: 10px;
              height: 10px;
              color: #000;
            }

          }
        }
      }
    }

  }

</style>
