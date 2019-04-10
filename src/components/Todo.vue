<template>
    <div class="col-sm-6">
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">{{ todo.title }}</h5>
                <p class="card-text">{{ todo.description }}</p>
                <p>{{ todo.done ? 'DONE' : 'UNDONE' }}</p>
                <span v-on:click="deleteTodo(todo.id)" class="card-link">Remove</span>
                <span v-on:click="editTodo(todo)" class="card-link">Edit</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Todo',
    props: ['todo'],
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
