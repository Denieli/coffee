<template>
  <div class="cof-home-container">
    <div class="cof-swiper">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="https://www.foreignkey.top/images/coffee/coffee/slide/slide1.png" /></van-swipe-item>
        <van-swipe-item><img src="https://www.foreignkey.top/images/coffee/coffee/slide/slide0.png" /></van-swipe-item>
        <van-swipe-item><img src="https://www.foreignkey.top/images/coffee/coffee/slide/slide2.png" /></van-swipe-item>
      </van-swipe>
      <div class="cof-qr"><img src="https://www.foreignkey.top/images/coffee/coffee/icon/qrcode.png"/></div>
    </div>
    <div class="cof-content">
      <van-cell-group>
        <van-cell title="泰嘉园店" label="距您1.5km">
          <template slot="right-icon">
            <div class="cof-switch"><span class="cof-fill">自提</span><span class="cof-black">外送</span></div>
          </template>
        </van-cell>
        <van-cell v-for="(item,index) in list" :key="index" :title="item.title" :label="item.label">
          <template slot="right-icon">
            <img :src="baseUrl+item.src" />
          </template>
        </van-cell>
      </van-cell-group>
      <div class="cof-details">
        <img src="https://www.foreignkey.top/images/coffee/coffee/icon/icon-details.png" />
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        baseUrl: "https://www.foreignkey.top/images/coffee/coffee/icon/",
        list: [{
            title: "现在下单",
            label: "ORDER NOW",
            src: "icon-coffee.png"
          },
          {
            title: "咖啡钱包",
            label: "COFFEE WALLET",
            src: "icon-wallet.png"
          },
          {
            title: "送Ta咖啡",
            label: "SEND COFFEE",
            src: "icon-gift.png"
          },
          {
            title: "企业账户",
            label: "ENTERPRISE ACCOUNT",
            src: "icon-account.png"
          }
        ]
      }
    }
  }

</script>
<style lang="scss" scoped>
  .cof-home-container {
    height: 100%;

    .van-swipe {
      height: 183.72px;

      .van-swipe-item {
        img {
          width: 100%;
        }
      }
    }
    .cof-swiper{
      position: relative;
      .cof-qr{
        width:41.6px;
        height:41.6px;
        border-radius:50%;
        position: absolute;
        top:24.6px;
        right:15.6px;
        background:rgba(0,0,0,.5);
        
        text-align:center;
        img{
          padding:10.76px;
          width: 20.4px;
        }
      }
    }

    .cof-content {
      height: 100%;
      overflow: scroll;
      margin-bottom: 50px;

      .cof-details {
        text-align: center;

        img {
          width: 333.3px;
        }
      }

      .van-cell {
        .van-cell__title {
          font-size: 14.9px;
          color:#2e2e2e;
        }
        .van-cell__label{
          color:#646464;
        }
        &:first-child {
          padding-top: 18.4px;
          height: 75px;

          .van-cell__title {
            font-size: 14.2px;
          }

          .cof-switch {
            background-color: #fff;
            border-radius: 18.5px/18.5px;
            padding: 1px;
            box-sizing: border-box;
            text-align: center;
            width: 98.95px;
            height: 37.5px;
            border: 1.3px solid #7aa7d0;

            .cof-fill {
              background-color: #7aa7d0;
              border-radius: 17px/17px;
              width: 49.3px;
              color: #fff;
              height: 34px;
              display: block;
              font-size: 12.1px;
              line-height: 12.1px;
              padding-top: 11.1px;
              box-sizing: border-box;
              float: left;
            }

            .cof-black {
              display: block;
              width: 45px;
              border-radius: 17px/17px;
              float: left;
              font-size: 12.1px;
              line-height: 12.1px;
              color: #7aa7d0;
              padding-top: 11.1px;
              box-sizing: border-box;
            }

          }
        }

        img {
          width: 42.3px;
          height: 42.3px;
        }
      }

    }


  }

</style>
