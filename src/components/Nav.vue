<template>
   <div>
 <nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
  <a class="navbar-brand" href="/HelloWorld">{{ header }}</a>
  <router-link to="/todo-list">Go to my todo list</router-link>
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div id="navb" class="navbar-collapse collapse hide">
    <ul class="nav navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="/SignIn"><span class="fas fa-user"></span> Sign Up</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><span class="fas fa-sign-in-alt"></span> Login</a>
      </li>
    </ul>
  </div>
</nav>
   </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import TodoPage from '@/components/TodoPage'


export default {
    name: "Nav",
data() {
    return {
        header: "My To Do App"
        //komenatar
    }
}
}
</script>
<style>

</style>
