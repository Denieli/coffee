<template>
    <div class="cof-menu-container">
      <h5>选择咖啡与小食</h5>
      <div><img src="https://www.foreignkey.top/images/coffee/coffee/menu/menu-zz.png" /></div>
      <van-tree-select :items="items" :main-active-index="mainActiveIndex" :active-id="activeId" @navclick="onNavClick"
        @itemclick="onItemClick" />
        <!-- 底部导航栏 -->
        <foot-guide></foot-guide>
    </div>
  </template>
  <script>
    import  footGuide from  '../../components/footer/FootGuide.vue'
    export default {
      data() {
        return {
          items: [{
            // 导航名称
            text: '所有城市',
            // 该导航下所有的可选项
            children: [{
                // 名称
                text: '温州',
                // id，作为匹配选中状态的标识
                id: 1,
                // 禁用选项
                disabled: true
              },
              {
                text: '杭州',
                id: 2
              }
            ]
          }],
          // 左侧高亮元素的index
          mainActiveIndex: 0,
          // 被选中元素的id
          activeId: 1
        };
      },
      methods: {
        onNavClick(index) {
          this.mainActiveIndex = index;
        },
        onItemClick(data) {
          this.activeId = data.id;
        }
      },
      components:{
        'foot-guide':footGuide
      }
    }
  
  </script>
  <style lang="scss" scoped>
    .cof-menu-container {
      h5 {
        height: 44.4px;
        line-height: 44.4px;
        margin: 0;
        text-align: center;
        font-weight: 200;
        font-size: 16.6px;
        color:#313131;
      }
  
      img {
        width: 100%;
      }
    }
  
  </style>
  