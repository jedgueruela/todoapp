<template>
  <v-chip-group>
    <v-chip @click="filter = 'all'">All</v-chip>

    <v-chip @click="filter = 'active'">Active</v-chip>

    <v-chip @click="filter = 'completed'">Completed</v-chip>
  </v-chip-group>
  
  <ul v-show="!! todos.length" class="list">
    <li v-for="(todo, index) in todos" :key="index">
      <Todo :todo="todo" />
    </li>
  </ul>

  <br>
  
  <span>Showing {{ todos.length }} item(s).</span>
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

<style scoped lang="scss">
  .list {
    list-style: none;
    padding: 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;
  }
</style>

