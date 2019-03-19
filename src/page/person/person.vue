<template>
    <div class="conf-person-container">
      <!-- 头部开始 -->
      <div class="conf-title">
        <img class="conf-bell" src="https://www.foreignkey.top/images/coffee/coffee/person/bell.png" />
        <div class="conf-row">
          <div class="conf-row-headport"><img src="https://www.foreignkey.top/images/coffee/coffee/person/headportrait.jpg" /></div>
          <div class="conf-row-name">
            <div>李阔萱</div>
            <div class="iconfont icon-dgd-icon-arrorw-righ"></div>
          </div>
        </div>
      </div>
      <!-- 头部结束 -->
      <!-- 列表开始 -->
      <van-cell-group>
        <van-cell v-for="(item,index) in list" :key="index" :value="item.value?item.value:''" :title="item.title" is-link>
          <template slot="icon">
            <span :class='"iconfont "+item.icon'></span>
          </template>
        </van-cell>
        <van-cell title="帮助反馈" is-link>
          <template slot="icon">
            <span class="iconfont icon-heartbeat"></span>
          </template>
        </van-cell>
      </van-cell-group>
      <!-- 列表结束 -->
  
      <!-- 底部图片开始 -->
      <div class="conf-propaganda">
        <div class="conf-tw">
          <img src="https://www.foreignkey.top/images/coffee/coffee/person/person-tw.png" />
        </div>
      </div>
      <!-- 底部图片结束 -->
      <foot-guide></foot-guide>
    </div>
  </template>
  <script>
    import "../../assets/font/iconfont.css"
    import footGuide from '../../components/footer/FootGuide.vue'
    export default {
      data() {
        return {
          list: [{
              title: "个人资料",
              icon: "icon-person"
            },
            {
              title: "咖啡钱包",
              icon: "icon-coffee",
              value: "0杯"
            },
            {
              title: "优惠券",
              icon: "icon-bill",
              value: "2张"
            },
            {
              title: "兑换优惠",
              icon: "icon-money"
            },
            {
              title: "发票管理",
              icon: "icon-icon38"
            },
          ]
        }
      },
      components: {
        'foot-guide': footGuide
      }
    }
  
  </script>
  
  <style lang="scss" scoped>
    .conf-person-container {
  
      /* 头部样式 */
      .conf-title {
        height: 166px;
        background: #5b4337;
        position: relative;
  
        .conf-row {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          margin: auto 0;
          height: 60px;
          line-height: 60px;
          color: #fff;
          width: 100%;
          box-sizing: border-box;
  
          .conf-row-headport {
            width: 60px;
            height: 100%;
            border-radius: 50%;
            overflow: hidden;
            float: left;
            margin-left: 19px;
  
            img {
              width: 100%;
            }
          }
  
          .conf-row-name {
            font-size: 14px;
            text-align: center;
            padding: 0 14px 0 24px;
            display: flex;
            justify-content: space-between;
  
            .icon-dgd-icon-arrorw-righ {
              width: 16px;
              color: #8f7f74;
            }
          }
        }
  
        .conf-bell {
          position: absolute;
          top: 24px;
          right: 14px;
          width: 25px;
        }
      }
  
      /* 列表样式 */
      .van-cell {
        height: 52px;
        color: #757575;
  
        .iconfont {
          color: #c5c5c5;
        }
  
        .van-cell__title {
          margin-left: 23px;
        }
      }
  
      /* 底部图片样式 */
      .conf-propaganda {
        text-align: center;
        margin-bottom: 50px;
  
        .conf-tw {
          padding: 0 10px;
  
          img {
            width: 100%;
          }
        }
      }
  
    }
  
  </style>
  