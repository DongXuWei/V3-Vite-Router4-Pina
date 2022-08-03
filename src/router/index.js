// 路由文件
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  // 配置模式
  history: createWebHashHistory(),
  // 配置路由规则
  routes: [
    {
      path: '',
      redirect: '/login'
    }
  ]
})
export default router
