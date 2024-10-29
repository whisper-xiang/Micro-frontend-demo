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
