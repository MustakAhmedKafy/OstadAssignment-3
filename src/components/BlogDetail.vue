<!-- BlogDetail.vue -->
<template>
  <div>
    <h2>{{ blog.content }}</h2>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { pinia } from '../store';

const blogId = ref($route.params.id); // Using $route to access the route parameters
const blog = ref({});

// Fetch blog details from store or API based on blogId
// Example:
// const fetchBlogDetails = () => {
//   const fetchedBlog = pinia.state.blogStore.getBlogById(blogId.value);
//   blog.value = fetchedBlog;
// };

// fetchBlogDetails();
</script>
