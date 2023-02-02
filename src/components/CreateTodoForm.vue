<!-- eslint-disable import/no-extraneous-dependencies -->

<template>
  <form>
    <label for="newtodo"
      >Input text
      <input type="text" name="newtodo" v-model="newbody" />
    </label>
    <button @click.prevent="addNewTodo">add todo</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useTodosStore } from '@/store/TodosStore';

const todosStore = useTodosStore();

const newbody = ref('');

const addNewTodo = () => {
  if (newbody.value.length === 0) return;
  const newTodo = {
    body: newbody.value,
    completed: false,
  };

  todosStore.addTodo(newTodo);
  newbody.value = '';
};
</script>

<style scoped></style>
