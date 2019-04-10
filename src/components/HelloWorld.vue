<template>
  <div>
      <h1>To Do App</h1>
      <button v-on:click="clickButton" class="btn btn-primary">CLICK ME</button>
      <button v-on:click="clickButtonTwo" class="btn btn-primary">CLICK MEEEEEEEE</button>
      <button><router-link to="/todo-list">Go to my App</router-link></button>
     </div> 
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Nav from './Nav';


export default {
  name: 'HelloWorld',
  components: {
    "Nav": Nav,
  },
  methods: {
    clickButton() {
      console.log('CLICK ME')
    },
    clickButtonTwo() {
      console.log('CLICK ME TWO')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
