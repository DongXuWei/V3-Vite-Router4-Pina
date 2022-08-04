<template>
  <div class="container">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="2" v-for="(item, index) in routes" :key="index">
        <el-icon><icon-menu /></el-icon>
        <template #title>{{ item.meta.title }}</template>
      </el-menu-item>
    </el-menu> -->

    <div class="left"> 
      <div class="logo">
        <img src="@/assets/images/图层897.png" alt="" />
        <span>欢迎您：xxx</span>
      </div>
      <ul v-for="(item, index) in routes" :key="index">
        <li class="lis" @click="gotoRouter(item.path)">
          <router-link class="link" :to="item.path">{{
            item.meta.title
          }}</router-link>
        </li>
      </ul>
    </div>

    <!-- 右侧区域 -->
    <div class="right">
      <div class="top">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <!-- <el-menu-item index="1">Processing Center</el-menu-item> -->
          <el-sub-menu index="2">
            <template #title>admin</template>
            <el-menu-item index="2-1">个人中心</el-menu-item>
            <el-menu-item index="2-2">退出登录</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
      <!-- 底部内容区域 -->
      <div class="contant">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const router = useRouter();
// 路由表数组
// console.log(router.options.routes);
// const routes = ref(router.options.routes);

//遍历出meta 循环渲染到左侧
const routes = router.options.routes.filter((item) => item.meta);
console.log(routes);

//点击li跳转相对应的路由
const gotoRouter = (path) => {
  router.push(path);
};
const activeIndex = ref("1");
const activeIndex2 = ref("1");
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};

const isCollapse = ref(true);
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
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
      padding: 10px;
      // margin: 10px 0;
      // text-align: center;
      background-color: tan;
      img {
        width: 100px;
        vertical-align: middle;
      }
      span {
        margin-left: 20px;
        color: blue;
      }
    }
    ul {
      width: 100%;
      // background-color: tan;
      .lis {
        width: 100%;
        line-height: 60px;
        font-size: 24px;
        cursor: pointer;
        display: flex;
        justify-content: flex-start;
        padding-left: 10px;
        &:hover {
          background-color: skyblue;
        }

        .link {
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
    .el-menu-demo {
      display: flex;
      padding-right: 20px;
      box-sizing: border-box;
      justify-content: flex-end;
    }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

}
</style>
