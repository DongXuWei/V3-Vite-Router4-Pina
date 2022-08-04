<template>
  <div class="container">
    <div class="left">
      <div class="logo">
        <img src="@/assets/images/图层897.png" alt="" />
      </div>
      <ul v-for="(item, index) in routes" :key="index">
        <li>
          <router-link :to="item.path">{{ item.meta.title }}</router-link>
        </li>
      </ul>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
// 路由表数组
// console.log(router.options.routes);
// const routes = ref(router.options.routes);

//遍历出meta 循环渲染到左侧
const routes = router.options.routes.filter((item) => item.meta);
console.log(routes);
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  display: flex;
  .left {
    width: 20%;
    height: 100vh;
    background-color: pink;
    .logo {
      width: 100%;
      margin: 10px 0;
      text-align: center;
      img {
        width: 50%;
      }
    }
  }
  .right {
    width: 80%;
    height: 100vh;
    background-color: skyblue;
  }
}
</style>
