<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <Todo :todo="todo" />
    </li>
  </ul>

  <div>
    <button @click="filter = 'all'">All </button>
    <button @click="filter = 'active'">Active</button>
    <button @click="filter = 'completed'">Completed</button>
  </div>
</template>

<script>
  import { useTodosStore } from '~/store/todos'

  export default {
    setup() {
      const filter = ref('all')

      const todosStore = useTodosStore()

      const todos = computed(() => {
        if (filter.value === 'active') {
          return todosStore.activeTodos
        } else if (filter.value === 'completed') {
          return todosStore.completedTodos
        } else {
          return todosStore.todos
        }
      })

      return {
        todos,
        filter,
      }
    },
  }
</script>
