<template>
    <div class="conf-shopcar-container">购物车
      <foot-guide :activeId="activeId"></foot-guide>
    </div>
  </template>
  <script>
    import footGuide from '../../components/footer/FootGuide.vue'
    export default {
      data() {
        return {
          activeId:3,
        }
      },
      components: {
        'foot-guide': footGuide
      }
    }
  
  </script>
  <style lang="scss" scoped>
  
  </style>
  