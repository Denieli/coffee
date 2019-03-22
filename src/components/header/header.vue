<template>
  <div class="conf-header-container">
    <div class="conf-luckin">
      <van-nav-bar :title="title" fixed />
      <div v-if="src" class="conf-luckin"><img :src="baseUrl+src" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .conf-header-container {
    .conf-luckin {
      margin-top: 46px;
      img {
        width: 100%;
      }
    }
  }

</style>

<script>
  export default {
    data(){
        return {
            baseUrl:"https://www.foreignkey.top/images/coffee/coffee/"
        }
    },
    props:{
        title:String,
        src:String
    }
  }

</script>
