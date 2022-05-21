import { createApp } from "vue";
import App from "./App.vue";
import "../src/assets/index.css";
import "flowbite";
import store from "./store";

createApp(App).use(store).mount("#app");
