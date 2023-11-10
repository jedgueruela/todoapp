<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" type="text" placeholder="Enter a task" />
    <button type="submit">Add</button>
  </form>
</template>

<script>
import { useTodosStore } from '~/store/todos'

export default {
  setup() {
    const todosStore = useTodosStore()

    const newTodo = ref('')

    const addTodo = () => {
      todosStore.addTodo(newTodo.value)
      newTodo.value = ''
    }

    return {
      newTodo,
      addTodo,
    }
  }
}
</script>
