<template>
  <div class="todo" :class="{ isComplete: todo.isComplete }" @click="toggleComplete(todo.id)">
    <v-icon color="success" class="todo-icon--complete" icon="mdi-check-circle" />
    <v-icon class="todo-icon--active" icon="mdi-circle-outline" />

    <h3 class="todo-body">{{ todo.body }}</h3>
    
    <v-btn @click="removeTodo(todo.id)">
      <v-icon icon="mdi-delete" />
    </v-btn>
  </div>
</template>

<script>
  import { useTodosStore } from '~/store/todos'
    
  export default {
    props: ['todo'],

    setup() {
      const todosStore = useTodosStore()
    
      const removeTodo = (id) => {
        todosStore.removeTodo(id)
      }
      
      const toggleComplete = (id) => {
        todosStore.toggleComplete(id)
      }
    
      return {
        removeTodo,
        toggleComplete,
      }
    },
  }
</script>
    
<style scoped lang="scss">
  .todo {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #eee;

    &.isComplete {
      opacity: 0.5;

      .todo-body {
        text-decoration: line-through;
      }

      .todo-icon--complete {
        display: block;
      }

      .todo-icon--active {
        display: none;
      }
    }

    h3 {
      margin-left: 0.5rem;
      flex: 1;
    }

    .todo-icon--complete {
      display: none;
    }

    button {
      margin-left: auto;
    }
  }
</style>
