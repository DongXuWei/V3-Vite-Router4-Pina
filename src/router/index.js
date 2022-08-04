// 路由文件
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  // 配置模式
  history: createWebHashHistory(),
  // 配置路由规则
  routes: [
    {
      path: '/',
      component: () => import('@/views/Login/LoginView.vue'),
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('@/views/Login/LoginView.vue')
    },
    {
      path: '/home',
      component: () => import('@/views/Layout/LayoutView.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/Home/HomeView.vue')
        }
      ]
    }
  ]
})
export default router
