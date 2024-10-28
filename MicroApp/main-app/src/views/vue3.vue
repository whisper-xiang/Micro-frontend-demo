<template>
  <div>
    <micro-app name='appname-vite' :url='url' iframe :data='microAppData' @created='handleCreate'
      @beforemount='handleBeforeMount' @mounted='handleMount' @unmount='handleUnmount' @error='handleError'
      @datachange='handleDataChange' keep-alive></micro-app>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const url = ref(`http://localhost:5173/child/vue3/`);
const microAppData = ref({ msg: '来自基座的数据' });

const handleCreate = (): void => {
  console.log('child-vue3 创建了')
}

const handleBeforeMount = (): void => {
  console.log('child-vue3 即将被渲染')
}

const handleMount = (): void => {
  console.log('child-vue3 已经渲染完成')

  setTimeout(() => {
    microAppData.value = { msg: '来自基座的新数据' }
  }, 2000)
}

const handleUnmount = (): void => {
  console.log('child-vue3 卸载了')
}

const handleError = (): void => {
  console.log('child-vue3 加载出错了')
}

const handleDataChange = (e: CustomEvent): void => {
  console.log('来自子应用 child-vue3 的数据:', e.detail.data)
}

onMounted(() => {
  console.log('vue3组件已挂载');
});
</script>

<style></style>
