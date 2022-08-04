<template>
  <div class="contaner">
    <!-- 左边 -->
    <div class="left">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-radio-button :label="false">expand</el-radio-button>
        <el-radio-button :label="true">collapse</el-radio-button>
      </el-radio-group>
      <el-menu
        :class="el - menu"
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>

          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

        <el-menu-item
          @click="gotoRouter(item.path)"
          index="2"
          v-for="(item, index) in routes"
          :key="index"
        >
          <el-icon><icon-menu /></el-icon>
          <template #title>{{ item.meta.title }}</template>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="rigth">
      <!-- 头部 -->
      <div class="top">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">Processing Center</el-menu-item>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
        </el-menu>
      </div>
      <!-- 路由出口 -->
      <div class="view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import {

  Menu as IconMenu,
  Location,
} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
let routes = ref(router.options.routes);
// console.log(router.options.routes)
routes = router.options.routes.filter((item) => item.meta);

const gotoRouter = (path) => {
  router.push(path);
};

const isCollapse = ref(true);
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};

const activeIndex = ref("1");
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<style lang="less" scoped>
.contaner {
  width: 100%;
  height: 100vh;
  display: flex;

  .left {
    // width: 20%;
    height: 100vh;
    // background-color: pink;
    .el-menu {
      // width: 100%;
      height: 100%;
    }
  }
  .right {
    // width: 80%;
    width: 100%;
    height: 100vh;
    background-color: skyblue;
    .view {
      width: 100%;
      height: 100%;
      background-color: red;
    }
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
