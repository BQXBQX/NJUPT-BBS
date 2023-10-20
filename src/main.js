import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from "./router/index.js";
import { IonicVue } from '@ionic/vue';

const app = createApp(App)
    .use(IonicVue)
    .use(Router)

Router.isReady().then(() => {
    app.mount('#app');
});