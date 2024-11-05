import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 導入樣式
import './assets/base.css'
import './assets/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app') 