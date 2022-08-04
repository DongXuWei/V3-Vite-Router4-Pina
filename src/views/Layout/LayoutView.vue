<template>
  <div class="container">
    <div class="left">
      <div class="logo">
        <img src="@/assets/images/图层897.png" alt="" />
      </div>
      <ul v-for="(item, index) in routes" :key="index">
        <li class="lis" @click="gotoRouter(item.path)">
          <router-link class="link" :to="item.path">{{ item.meta.title }}</router-link>
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

//点击li跳转相对应的路由
const  gotoRouter=(path)=>{
  router.push(path)
}
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
   ul{
    width: 100%;
    // background-color: tan;
     .lis{
      width: 100%;
      line-height: 60px;
       font-size: 24px;
       cursor: pointer;
       display: flex;
       justify-content: flex-start;
      padding-left: 10px;
       &:hover{
        background-color: skyblue;
       }

       .link{
        color: white;
        text-decoration: none;
       }
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
