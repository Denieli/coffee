<template>
  <div class="conf-orderlist-container">
    <ul>
   
      <li>
            <div class="conf-orderNumber">
              <div>自提订单:33673663526538</div>
              <div>已取消</div>
            </div>
            <div class="conf-orderInfo">
              <div class="conf-info">
                <h6>泰嘉园店（NO.0568）</h6>
                <span>红茶拿铁等 共1件商品</span>
              </div>
              <div class="conf-time">2019-03-12 16:08</div>
            </div>
            <div class="conf-orderInfo">
              <div class="conf-money">
                ￥27
              </div>
              <div class="conf-btn">
                <van-button size="small">再来一单</van-button>
              </div>
            </div>
          </li>
          <li>
                <div class="conf-orderNumber">
                  <div>自提订单:33673663526538</div>
                  <div>已取消</div>
                </div>
                <div class="conf-orderInfo">
                  <div class="conf-info">
                    <h6>泰嘉园店（NO.0568）</h6>
                    <span>红茶拿铁等 共1件商品</span>
                  </div>
                  <div class="conf-time">2019-03-12 16:08</div>
                </div>
                <div class="conf-orderInfo">
                  <div class="conf-money">
                    ￥27
                  </div>
                  <div class="conf-btn">
                    <van-button size="small">再来一单</van-button>
                  </div>
                </div>
              </li>
    </ul>
    <div class="conf-overload">已经全部加载完成</div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
  .conf-orderlist-container {
    height:100%;
    overflow: scroll;
    margin-bottom:50px;
  
    li {
      background-color: #fff;
      margin-top: 10px;
      font-size: 12px;
      padding-left: 16px;
      padding-right: 16px;

      .conf-orderNumber {
        display: flex;
        justify-content: space-between;
        color: #aeaeae;
        line-height: 42px;
        height: 42px;
        position: relative;

        &::after {
          content: ' ';
          position: absolute;
          pointer-events: none;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          left: 0;
          right: 0;
          bottom: 0;
          -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
          border-bottom: 1px solid #ececec;
        }
      }

      .conf-orderInfo {
        display: flex;
        justify-content: space-between;

        .conf-info {
          h6 {
            font-size: 14px;
            line-height: 30px;
          }

          span {
            line-height: 22px;
          }

        }

        .conf-time {
          line-height: 32px;
        }
        .conf-money{
            line-height: 51px;
        }
        .conf-btn{
            line-height: 51px;
        }

      }
    }
    .conf-overload{
        text-align: center;
        color:#b4b4b4;
        font-size:12px;
        background-color: #fff;
    }
  }

</style>
