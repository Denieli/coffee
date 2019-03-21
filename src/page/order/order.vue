<template>
    <div>订单
        <!-- 底部导航栏 -->
        <foot-guide :activeId="activeId"></foot-guide>
    </div>
</template>
<script>
 import  footGuide from  '../../components/footer/FootGuide.vue'
 export default{
     data(){
        return {
            activeId:2
        }
     },
     components:{
         'foot-guide':footGuide
     }
 }
</script>
<style></style>