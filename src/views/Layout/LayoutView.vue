<template>
  <div class="contaner">
    <!-- 左边 -->
    <div class="left">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
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
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
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
</script>

<style lang="less" scoped>

.contaner{
  width: 100%;
  height: 100%;
  display: flex;

  .left{
    width: 20%;
    height: 100vh;
  }
  .right{
    width: 80%;
    height: 100vh;
    background-color: skyblue;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
