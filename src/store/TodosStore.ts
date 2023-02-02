/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';

interface Todo {
  id: number;
  body: string;
  completed: boolean;
}

interface State {
  todos: Todo[];
}

export const useTodosStore = defineStore('TodosStore', {
  state: (): State => ({
    todos: [],
  }),

  actions: {
    addTodo(todo: Omit<Todo, 'id'>) {
      const newTodo = {
        id: Date.now(),
        ...todo,
      };
      this.todos.push(newTodo);
    },
    removeTodo(todoId: number) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    },
    checkTodo(todoId: number) {
      this.todos = this.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      );
    },
  },
});
