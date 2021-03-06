import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoPage from '@/components/TodoPage'
import SignIn from '@/components/SignIn'
import Nav from '@/components/Nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todo-list',
      name: 'TodoPage',
      component: TodoPage
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn
    },
  ],
  mode:"history"
})
