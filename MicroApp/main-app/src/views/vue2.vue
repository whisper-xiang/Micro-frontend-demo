<template>
  <div>
    <micro-app name='appname-vue2' :url='url' :data='microAppData' @created='handleCreate'
      @beforemount='handleBeforeMount' @mounted='handleMount' @unmount='handleUnmount' @error='handleError'
      @datachange='handleDataChange' prefetch></micro-app>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const url = ref(`http://localhost:3002/child/vue2/`);
const microAppData = ref({ msg: '来自基座的数据' });

const handleCreate = (): void => {
  console.log('child-vue2 创建了')
}

const handleBeforeMount = (): void => {
  console.log('child-vue2 即将被渲染')
}

const handleMount = (): void => {
  console.log('child-vue2 已经渲染完成')

  setTimeout(() => {
    microAppData.value = { msg: '来自基座的新数据' }
  }, 2000)
}

const handleUnmount = (): void => {
  console.log('child-vue2 卸载了')
}

const handleError = (): void => {
  console.log('child-vue2 加载出错了')
}

const handleDataChange = (e: CustomEvent): void => {
  console.log('来自子应用 child-vue2 的数据:', e.detail.data)
}
onMounted(() => {

})
</script>

<style></style>
