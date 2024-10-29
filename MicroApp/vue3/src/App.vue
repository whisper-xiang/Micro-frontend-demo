<template>
  <div>
    <h2>Sub App</h2>
    <p>This is the sub-application powered by micro-app.</p>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
const app = window.microApp // 获取主应用的window对象

// ----------------------------------接收主应用下发的数据
// const data = window.microApp.getData() // 返回主应用下发的data数据
// console.log(data, '打印主应用下发的数据') // 打印主应用下发的数据

// 监听函数
function dataListener(data) {
  console.log('来自主应用的数据', data)
}

function onData(data) {
  console.log('哒哒哒冒蓝火', data)
}

// 监听数据变化
// window.microApp.addDataListener(dataListener)

// 监听数据变化，初始化时如果有数据则主动触发一次
window.microApp.addDataListener(dataListener, true)

// 解绑监听函数
// window.microApp.removeDataListener(dataListener)

// 清空当前子应用的所有绑定函数(全局数据函数除外)
// window.microApp.clearDataListener()


// -------------------------------发送数据给主应用
// dispatch只接受对象作为参数
// window.microApp.dispatch({ type: '子应用发送给主应用的数据' })

window.microApp.dispatch({ city: 'HK' }, (cb) => {
  console.log('数据已经发送完成', cb)
})


// 强制发送数据，无论缓存中是否已经存在 name: 'jack' 的值
// window.microApp.forceDispatch({name: 'jack'}, () => {
//   console.log('数据已经发送完成')
// })


window.microApp.addDataListener((data) => {
  console.log('来自主应用的数据', data)

  return '返回值1'
})

const message = ref('Hello from child');

// 暴露 message 给父组件
const showMessage = (message) => {
  console.log('子应用收到消息:', message);
};

// 使用 defineExpose 暴露 showMessage 方法
defineExpose({
  showMessage,
});

onMounted(() => {
  console.log(window.rawWindow);
  // window.a = 2
  console.log('child-vue3 mounted:', window.a)
})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
