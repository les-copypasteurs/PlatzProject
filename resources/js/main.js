import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from "./store/index.js"

createApp(App).use(router, VueAxios, axios).mount('#app')
