<!-- eslint-disable import/no-extraneous-dependencies -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.body }}
        <input type="checkbox" :checked="todo.completed" @change="() => toggleTodo(todo.id)" />
        <button @click="() => deleteTodo(todo.id)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useTodosStore } from '@/store/TodosStore';
import { storeToRefs } from 'pinia';

const store = useTodosStore();

const { todos } = storeToRefs(store);

const deleteTodo = store.removeTodo;
// const deleteTodos = (todoId: number) => {
//   store.removeTodo(todoId);
// };

const toggleTodo = store.checkTodo;
</script>

<style scoped></style>
