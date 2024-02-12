<template>
    <div id="app">

    <div class="page">

      <myHeader></myHeader>

      <mainNav></mainNav>

      <router-view/>          
      
    </div>

    </div>
</template>



<script>

import myHeader from './components/Header/myHeader.vue';
import mainNav from './components/Navigation/MainNav.vue';

export default {
  name: 'app',
  components: {
    myHeader,
    mainNav,
  },
  methods : {

  }
}
</script>



<style lang="scss">

  html,body{
    background:white;
    margin:0;
    overflow-x: hidden;
  }
  #app {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }


  .page {
    position:relative;
    height:100%;
  }

  a {
    color: #5bcf1c;
    text-decoration:none !important;
  }

  a:hover {
    color: #5bcf1c;
  }


</style>
