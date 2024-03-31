<!-- BlogForm.vue -->
<template>
  <form @submit.prevent="addBlog">
    <textarea v-model="content"></textarea>
    <button type="submit">Add Blog</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { pinia } from '../store';

const content = ref('');

const addBlog = () => {
  // Add blog to store or API
  // You can access the store here like this:
  // pinia.state.storeName.mutationName()
  // or
  // pinia.store.storeName.mutationName()
  // Replace "storeName" and "mutationName" with your actual store and mutation names.
};
</script>
