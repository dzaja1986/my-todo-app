<template>
  <div class="container">
    <todo-list v-on:edit-todo="editTodo" v-on:delete-todo="deleteTodo" v-bind:title="title" v-bind:todos="todos"></todo-list>

    <div class="row">
      <div class="col-sm-12">
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
          <button v-show="!editTodoForm" v-on:click="createTodo" type="submit" class="btn btn-primary">Add Todo</button>
          <button v-show="editTodoForm" v-on:click="saveTodo" type="submit" class="btn btn-success">Save Todo</button>
          <input type="checkbox" id="checkbox" v-model="done">
          <label for="checkbox">{{ done ? 'DONE' : 'UNDONE'}}</label>
        </form>
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
      editTodoId: null
     // checked:false
    };
  },
  components: {
    TodoList
  },
  methods: {
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
      // TODO Obrisati element iz niza na neki drugi nacin
    },
    createTodo(event) {
      event.preventDefault();
      
      this.todos.push({
        id: this.idCounter,
        title: this.titleText,
        description: this.descriptionText,
        done: this.done
      });

      this.titleText = "";
      this.descriptionText = "";
      this.done = false;

      this.idCounter += 1;
    }
  }
};
</script>