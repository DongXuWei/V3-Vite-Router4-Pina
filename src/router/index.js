// 路由文件
import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  // 配置模式
  history: createWebHashHistory(),
  // 配置路由规则
  routes: [
    {
      path: "/",
      component: () => import("@/views/Login/LoginView.vue"),
      redirect: "/login",
    },
    {
      path: "/login",
      component: () => import("@/views/Login/LoginView.vue"),
    },
    {
      path: "/home",
      component: () => import("@/views/Layout/LayoutView.vue"),
      meta: {
        title: "首页",
      },
      children: [
        {
          path: "",
          component: () => import("@/views/Home/HomeView.vue"),
        },
      ],
    },
    {
      path: "/user",
      component: () => import("@/views/Layout/LayoutView.vue"),
      meta: {
        title: "个人中心",
      },
      children: [
        {
          path: "",
          component: () => import("@/views/UserInfo/UserInfo.vue"),
        },
      ],
    },{
      path: "/setting",
      component: () => import("@/views/Layout/LayoutView.vue"),
      meta: {
        title: "设置",
      },
      children: [
        {
          path: "",
          component: () => import("@/views/Setting/SettingView.vue"),
        },
      ],
    },
  ],
});
export default router;
