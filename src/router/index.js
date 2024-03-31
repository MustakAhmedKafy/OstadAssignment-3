// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import BlogForm from "../components/BlogForm.vue";
import BlogDetail from "../components/BlogDetail.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/add-blog", name: "AddBlog", component: BlogForm },
  { path: "/blog/:id", name: "BlogDetail", component: BlogDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
