import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
// import apiClient from "./http-common";

import "@/assets/css/general.css";

createApp(App).use(router).mount('#app')
