<template>
  <div>
    <micro-app name='appname-vue3' :url='url' iframe :data='microAppData' @created='handleCreate'
      @beforemount='handleBeforeMount' @mounted='handleMount' @unmount='handleUnmount' @error='handleError'
      @datachange='handleDataChange' ref="childAppRef"></micro-app>

    <el-button @click="callChildAppMethod">调用子应用方法</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import micro from "@micro-zoe/micro-app";

const childAppRef = ref(null);

micro.addDataListener('appname-vue3', (data) => {
  console.log('来自子应用appname-vue3的数据:', data)

  return '返回值1'
})

const url = ref(`http://localhost:3001/child/vue3/`);
const microAppData = ref({ msg: '来自基座的数据' });

const handleCreate = (): void => {
  console.log('child-vue3 创建了')
}

const handleBeforeMount = (): void => {
  console.log('child-vue3 即将被渲染')
}

const childAppInstance = ref(null);
const handleMount = (event): void => {
  console.log('child-vue3 已经渲染完成')

  setTimeout(() => {
    microAppData.value = { msg: '来自基座的新数据' }
  }, 2000)

  const childAppInstance = event;
  console.log('子应用实例:', childAppInstance);

  childAppInstance.value = event.detail;

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


// 调用子应用暴露的方法
const callChildAppMethod = () => {
  console.log(childAppInstance.value.showMessage);
  if (childAppInstance.value?.showMessage) {
    childAppInstance.value.showMessage('Hello from main app');
  }
}

onMounted(() => {
  console.log('vue3组件已挂载');

  micro.setData('appname-vue3', { type: '新的数据' })

  // const childAppInstance = childAppRef.value;
  // console.log('子应用实例:', childAppInstance);

});
</script>

<style></style>
