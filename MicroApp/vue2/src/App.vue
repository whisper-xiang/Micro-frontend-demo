<!-- <template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    // const data = window.microApp.getData() // 返回主应用下发的data数据
    // console.log(data)
    window.microApp.addDataListener((data) => {
      console.log('child-vue2 addDataListener:', data)
    })

    window.a = 1
    console.log('child-vue2 mounted:', window.a)
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->


<template>
  <div class="main-wrapper">
    <Sidebar class="sidebar" />
    <router-view class='router-container' />
  </div>
</template>


<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style scoped>
.main-wrapper {
  background: greenyellow;
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.sidebar {
  width: 200px;
  height: 100vh;
  background-color: #f5f5f5;
}

.router-container {
  flex: 1;
}
</style>
