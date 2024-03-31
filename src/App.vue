<!-- App.vue -->
<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'pinia';
import { pinia } from './store/index';

onMounted(() => {
  // Initialize store data or fetch blogs
});
</script>
