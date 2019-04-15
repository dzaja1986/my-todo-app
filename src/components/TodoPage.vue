<template>
  <div class="container">
    <todo-list v-on:edit-todo="editTodo" v-on:delete-todo="deleteTodo" v-bind:title="title" v-bind:todos="todos"></todo-list>

    <div class="row">
      <div class="col-sm-12 col-md-6 offset-md-3 mt-4">
        <form class="p-2 bg-dark text-white">
          <div class="form-group">
            <label for="exampleInputEmail1">Todo Title</label>
            <input
              v-model="titleText"
              ref="title"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter todo title"
            >
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Todo Description</label>
            <input
              v-model="descriptionText"
              ref="description"
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Todo Description"
            >
          </div>
          <button v-bind:disabled="isButtonDisabled()" v-show="!editTodoForm" v-on:click="createTodo" type="submit" class="btn btn-primary">Add Todo</button>
          <button v-bind:disabled="isButtonDisabled()" v-show="editTodoForm" v-on:click="saveTodo" type="submit" class="btn btn-success">Save Todo</button>
          <button v-on:click="exitEditMode" v-show="editTodoForm" class="btn btn-warning">Exit Edit MOde</button>
          <input type="checkbox" id="checkbox" v-model="done">
          <label for="checkbox">{{ done ? 'DONE' : 'UNDONE'}}</label>
        </form>
        <button v-bind:disabled="isClearTodosButtonDisabled()" v-on:click="clearTodos" class="btn btn-danger mt-4">Clear Todos</button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "./TodoList";

export default {
  name: "TodoPage",
  data() {
    return {
      title: "MY TODO LIST",
      titleText: "",
      descriptionText: "",
      idCounter: 1,
      done: false,
      todos: [],
      editTodoForm: false,
      editTodoId: null,
      isClearTodosButtonDisabled: function() {
        if (this.todos.length > 0) {
          if (this.editTodoForm) {
            return true
          }
          return false;
        } else {
          return true;
        }
      },
      isButtonDisabled: function() {
        if (this.titleText.length >= 1 && this.descriptionText.length >= 1) {
          return false;
        } else {
          return true;
        }
      }
     // checked:false
    };
  },
  components: {
    TodoList
  },
  methods: {
    exitEditMode(event) {
      event.preventDefault();
      this.editTodoForm = false;
      this.titleText = "";
      this.descriptionText = "";
      this.done = false;
    },
    setTodosToLocalStorage(todos) {
      window.localStorage.setItem('todos', JSON.stringify(todos))
    },
    // TODO napraviti metodu resetFields koja ce kada se pozove da vrati inpute default vrednosti
    saveTodo(event) {
      event.preventDefault();
     
      
      this.todos.map(todo => {
        if (todo.id === this.editTodoId) {
          console.log('kliknut id', todo)
          todo.title = this.titleText;
          todo.description = this.descriptionText;
          todo.done = this.done;
        }

        return todo;
      })

      this.setTodosToLocalStorage(this.todos);

      this.titleText = "";
      this.descriptionText = "";
      this.done = false;

      this.editTodoForm = false;

    },
    editTodo(todo) {
      this.editTodoForm = true;
      console.log('NAS EDIT TODO', todo);

      this.titleText = todo.title;
      this.descriptionText = todo.description;
      this.done = todo.done;
      this.editTodoId = todo.id
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);

      this.setTodosToLocalStorage(this.todos);
      // TODO Obrisati element iz niza na neki drugi nacin
    },
    /*deleteTodo: function(id) {
                this.todos.splice(this.todos.indexOf(id), 1);
        },*/

    createTodo(event) {
      event.preventDefault();
      
      this.todos.push({
        id: this.idCounter,
        title: this.titleText,
        description: this.descriptionText,
        done: this.done
      });

      this.setTodosToLocalStorage(this.todos);

      this.titleText = "";
      this.descriptionText = "";
      this.done = false;

      this.idCounter += 1;
    },
    clearTodos() {
      this.todos = [];
      this.setTodosToLocalStorage(this.todos);
    }
  },
  created() {
    
    const todos = JSON.parse(window.localStorage.getItem('todos'));
    this.todos = todos;
    this.idCounter = todos.length;
  }
};
</script>