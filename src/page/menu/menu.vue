<template>
  <div class="cof-menu-container">
    <header-guide title="选择咖啡与小食" src="menu/menu-zz.png"></header-guide>
    <!-- 分类 -->
    <div class="conf-menu-wapper">
      <div class="conf-wapper">

        <div class="conf-menu-wapper">
          <div>
            <ul>
              <li class="conf-menu-item" :class="{current:index==currentIndex}" @click="clickCurrentIndex(index)"
                v-for="(item,index) in coffee" :key="index"><span>{{item.menu}}</span></li>
            </ul>
          </div>
        </div>
        <!-- 咖啡列表 -->
        <div class="conf-coffee-wapper">
          <div ref="findUi">
            <div class="findUi" v-for="(item,index) in coffee" :key="index">
              <div class="conf-coffee-item-title">
                <div class="conf-coffee-item" v-if="!item.title">
                  <div class="conf-category">
                    <h6>{{item.menu}}</h6>
                    <div class="conf-addline-wapper">
                      <div class="conf-addline"></div>
                    </div>
                  </div>
                </div>
                <div class="conf-coffee-item" v-if="item.title">
                  <h6>{{item.menu}}</h6>
                  <div class="conf-category">
                    <span class="conf-describe">{{item.title}}</span>
                    <div class="conf-addline-wapper">
                      <div class="conf-addline"></div>
                    </div>
                  </div>
                </div>
              </div>
              <ul>
                <li class="conf-coffee-item-content" v-for="(goods,num) in item.goods" :key="num">
                  <div class="conf-content-left">
                    <div class="conf-coffee-logo"> <img
                        :src='"https://www.foreignkey.top/images/coffee/part5/"+goods.photo' />
                    </div>
                    <span class="conf-pag"></span>
                  </div>
                  <div class="conf-content-right">
                    <h6>{{goods.name}}</h6>
                    <p>{{goods.alias}}</p>
                    <p>默认：{{goods.dafalut}}</p>
                    <div class="conf-number">
                      <div>{{goods.money}}</div>
                      <div><a class="conf-num"><span class="iconfont icon-add"></span></a></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部导航栏 -->
    <foot-guide :activeId="activeId"></foot-guide>
  </div>
</template>
<script>
  import footGuide from '../../components/footer/FootGuide.vue'
  import BScroll from 'better-scroll'
  import header from '../../components/header/header.vue'
  import {
    mapState
  } from 'vuex'
  export default {
    data() {
      return {
        activeId: 1, //底部导航栏点击到第几个
        tops: [], //记录每个列表的位置
        startY: 0 //当前列表的位置
      };
    },
    mounted() {
      this.$store.dispatch('getCoffee', () => {
        this.$nextTick(() => {
          new BScroll('.conf-menu-wapper', {
            click: true
          })
          this.bscrollCoffee = new BScroll('.conf-coffee-wapper', {
            probeType: 2,
            click: true
          })
          this.bscrollCoffee.on("scroll", ({
            x,
            y
          }) => {
            this.startY = Math.abs(y);
          })
          let top = 0;
          const findUi = this.$refs.findUi.getElementsByClassName('findUi');
          Array.prototype.slice.call(findUi).forEach(element => {
            this.tops.push(top);
            top += element.offsetHeight;
          });
        });
      })



    },
    computed: {
      ...mapState(['coffee']),
      currentIndex() {
        const {
          tops,
          startY
        } = this;
        const index = tops.findIndex((item, index) => {
          if (startY >= tops[tops.length - 1] && index == tops.length - 1) {
            return tops.length - 1;
          }
          return (item <= startY) && (tops[index + 1] > startY);
        })
        return index;

      }
    },
    methods: {
      clickCurrentIndex(index) {
        const {
          tops
        } = this;

        this.startY = tops[index];
        this.bscrollCoffee.scrollTo(0, -this.startY, 100);
      }
    },
    components: {
      'header-guide': header,
      'foot-guide': footGuide,
    }
  }

</script>
<style lang="scss" scoped>
  .cof-menu-container {
    height: 100%;
    position: absolute;
    top:0;
    bottom:0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .conf-menu-wapper{
      position: relative;
      height: 100%;
      margin-bottom:50px;
      .conf-wapper {
      overflow: hidden;
      text-align: center;
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      .conf-menu-wapper {
        width: 90px;
        background: #f7f7f7;
        color: #5c5c5c;
        font-size: 14px;
        height: 100%;
        margin-bottom: 50px;


        ul {
          .conf-menu-item {
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
        }


        .current {
          color: #242424;
          background: #fff;
          font-weight: bolder;
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
        height: 100%;
        margin-bottom: 50px;

        .conf-coffee-item-content {
          display: flex;
          justify-content: space-between;
          padding: 12px 15px 14px 12px;
          position: relative;

          &::after {
            content: ' ';
            position: absolute;
            pointer-events: none;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            left: 12px;
            right: 0;
            bottom: 0;
            -webkit-transform: scaleY(.5);
            transform: scaleY(.5);
            border-bottom: 1px solid #ececec;
          }

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
          }

          .conf-content-right {
            flex-grow: 2;
            text-align: left;

            h6 {
              font-size: 16px;
              line-height: 16px;
              height: 16px;
              color: #3d3d3d;
              box-sizing: border-box;
              margin: 0 0 7px 7px;
              color: #080808;
            }

            p {
              font-size: 8px;
              line-height: 8px;
              height: 8px;
              color: #b1b1b1;
              box-sizing: border-box;
              margin: 7px;
            }

            .conf-number {
              color: #000;
              margin: 11px 0 0 7px;
              display: flex;
              justify-content: space-between;
              font-size: 13px;
              align-items: center;

              .icon-add {
                color: #80aad0;
                font-size: 23px;
                height: 23px;
              }
            }

          }
        }

        .conf-coffee-item-title {
          text-align: left;
          padding-left: 12px;
          height: 45px;
          color: #080808;
          position: relative;

          .conf-coffee-item {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            box-sizing: border-box;

            h6 {
              margin: 0;
              font-size: 14px;
            }

            .conf-category {
              display: flex;
              justify-content: spacing-between;

              .conf-describe {
                font-size: 12px;
                color: #a7a7a7
              }

              .conf-addline-wapper {
                position: relative;
                flex: 1;

                .conf-addline::after {
                  content: ' ';
                  position: absolute;
                  pointer-events: none;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;
                  left: 0;
                  right: 0;
                  bottom: 50%;
                  -webkit-transform: scaleY(.5);
                  transform: scaleY(.5);
                  border-bottom: 1px solid #ececec;
                }
              }

            }
          }

        }
      }
    }
    }
   

  }

</style>
