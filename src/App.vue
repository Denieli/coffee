<template>
  <div id="app">
    <router-view/>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import footGuide from './components/footer/FootGuide.vue'
export default {
  data(){
    return{

    }
  },
  components:{
    'foot-guide':footGuide
  }
}
</script>

<style>
body,html{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background:#fff;

}
</style>
