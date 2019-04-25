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
import TodoPage from '@/components/TodoPage'
import Nav from '@/components/Nav'
import main from '@/main.js'
import index from '@/router/index.js'
import SignIn from '@/components/SignIn'

export default {
  name: 'App', 
  components: {
    "Nav":Nav,
    TodoPage
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
