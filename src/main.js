import { createApp } from 'vue'
import './style.css'
import './assets/index.less'
import App from './App.vue'

// 导入路由
import router from '@/router'

// element组件UI库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// avue
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import axios from 'axios'
// ant组件库
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


// 导入pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)

app.use(ElementPlus)
app.use(Avue,{axios})
app.use(Antd)
app.mount('#app')
