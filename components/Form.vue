<template>
  <form @submit.prevent="addTodo">
    <v-text-field v-model="newTodo" label="Enter a task" variant="solo-filled"></v-text-field>
  </form>
</template>

<script>
import { useTodosStore } from '~/store/todos'

export default {
  setup() {
    const todosStore = useTodosStore()

    const newTodo = ref('')

    const addTodo = () => {
      if (!newTodo.value) {
        return
      }
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
