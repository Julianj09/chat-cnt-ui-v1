import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index'; // Añade esta línea

createApp(App)
  .use(router) // Añade esto
  .mount('#app');