<template>
  <div id="app">
    <Sidebar class="sidebar" />
    <router-view id='router-container' />
  </div>
</template>


<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.sidebar {
  width: 200px;
  height: 100vh;
  background-color: #f5f5f5;
}

#router-container {
  flex: 1;
}
</style>
