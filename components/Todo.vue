<template>
  <span :class="{ isComplete: todo.isComplete }" @click="toggleComplete(todo.id)">{{ todo.body }}</span>
  <button @click="removeTodo(todo.id)">Remove</button>
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
    
<style lang="scss">
  .isComplete {
    text-decoration: line-through;
  }
</style>
