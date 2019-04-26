<template>
    <div>
        <h1>{{ title }}</h1>
        <div class="row">
            <todo v-on:edit-todo="editTodo" v-on:delete-todo="deleteTodo" v-bind:todo="todo" v-for="todo in todos" v-bind:key="todo.id" />  
        </div>
        <button><router-link to="/HelloWorld">Back to Home page</router-link></button>
      
    </div>
</template>

<script>
import Nav from './Nav';
import Todo from './Todo';

export default {
    name: 'TodoList',
    props: ['title','todos'],
    components: {
        Todo,
        "Nav": Nav,
    },
    methods: {
        deleteTodo(id) {
            this.$emit('delete-todo', id);
        },
         editTodo(todo) {
            this.$emit('edit-todo', todo);
        }
    }
}
</script>

<style>

</style>
