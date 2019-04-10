<template>
  <div id="app">
    
  <Nav></Nav>
  <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import HelloWorld from '@/components/HelloWorld'
import Nav from '@/components/Nav'
import main from '@/main.js'
import index from '@/router/index.js'

export default {
  name: 'App', 
  components: {
    "Nav":Nav,
  }
 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
