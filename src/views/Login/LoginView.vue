<template>
  <div class="perBox">
    <a-tooltip title="正在加载中">
      <a-progress :percent="percent" :success="{ percent: percent }" />
    </a-tooltip>
    <div class="perCenter">
      <a-tooltip title="正在加载中">
        <a-progress
          :percent="percent"
          :success="{ percent: percent }"
          type="circle"
        />
      </a-tooltip>
      <a-tooltip title="正在加载中">
        <a-progress
          :percent="percent"
          :success="{ percent: percent }"
          type="dashboard"
        />
      </a-tooltip>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const percent = ref(0)
onMounted(() => {
  setInterval(() => {
    percent.value++
  }, 25)
})
</script>

<script setup></script>

<style lang="less" scoped>
.perBox {
  padding: 50px;
  .perCenter {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
