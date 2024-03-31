<!-- Home.vue -->
<template>
  <div>
    <div v-for="blog in blogs" :key="blog.id">
      <p>{{ blog.content.slice(0, 150) }}{{ blog.content.length > 150 ? '...' : '' }}</p>
      <router-link :to="{ name: 'BlogDetail', params: { id: blog.id }}">See More</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { pinia } from '../store';

const blogs = ref([]);

// Fetch blogs from store or API
</script>
