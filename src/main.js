// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.css';

// import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { routes } from './Route/Routes.js';
import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
    history: createWebHistory(),
    routes
})

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
// import router from './router';
const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);

app.mount('#app');



