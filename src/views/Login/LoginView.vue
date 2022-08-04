<template>
  <div class="perBox">
    <div>{{ percent <= 100 ? '网页加载中，请稍等...' : '已加载完毕' }}</div>
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
import { ref, onMounted, watch, h, defineComponent } from 'vue'
import { notification, Button, message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const percent = ref(0)
onMounted(() => {
  setInterval(() => {
    percent.value++
  }, 25)
})
watch(percent, () => {
  if (percent.value === 100) {
    // 提示并跳转路由
    const key = `open${Date.now()}`
    notification.open({
      message: '请问是否需要我来帮你跳转到主页？',
      description: '点击确定立即跳转',
      btn: () =>
        h(
          Button,
          {
            type: 'primary',
            size: 'small',
            onClick: () => {
              console.log(1111)
              router.push('/home')
            }
          },
          { default: () => '跳转主页' }
        ),
      key,
      onClose: () => {
        message.error('暂不跳转')
      }
    })
  }
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

<!-- 

<template>
  <a-button type="primary" @click="openNotification">Open the notification box</a-button>
</template>
<script lang="ts">
import { notification, Button } from 'ant-design-vue';
import { h, defineComponent } from 'vue';

const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};
export default defineComponent({
  setup() {
    const openNotification = () => {
      const key = `open${Date.now()}`;
      notification.open({
        message: 'Notification Title',
        description:
          'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        btn: () =>
          h(
            Button,
            {
              type: 'primary',
              size: 'small',
              onClick: () => notification.close(key),
            },
            { default: () => 'Confirm' },
          ),
        key,
        onClose: close,
      });
    };

    return {
      openNotification,
    };
  },
});
</script>



 -->
