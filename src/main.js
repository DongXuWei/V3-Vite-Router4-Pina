import { createApp } from 'vue'
import './style.css'
import './assets/index.less'
import App from './App.vue'

// element组件UI库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入路由
import router from '@/router'
// 导入pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)

app.use(ElementPlus)
app.mount('#app')
