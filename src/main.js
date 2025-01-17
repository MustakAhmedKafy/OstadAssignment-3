// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { pinia } from "./store/index";

const app = createApp(App);

app.use(router);
app.use(pinia); // Use the Pinia instance here

app.mount("#app");
