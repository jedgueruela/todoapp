import { defineStore } from 'pinia'

export const useTodosStore = defineStore({
  id: 'todos',

  state: () => ({
    todos: [],
  }),

  getters: {
    activeTodos() {
      return this.todos.filter((todo) => !todo.isComplete)
    },

    completedTodos() {
      return this.todos.filter((todo) => todo.isComplete)
    },
  },

  actions: {
    addTodo(body) {
      this.todos.push({
        id: new Date().getTime(),
        body: body,
        isComplete: false
      })
    },

    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },

    toggleComplete(id) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          todo.isComplete = ! todo.isComplete
        }

        return todo
      })
    },
  },
})
