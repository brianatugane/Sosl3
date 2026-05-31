import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router/index.js'
import { i18nPlugin } from './i18n.js'

createApp(App).use(router).use(i18nPlugin).mount('#app')
