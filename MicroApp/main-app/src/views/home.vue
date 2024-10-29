<template>
  <div class="home">
    <h1>主应用首页</h1>
    <!-- <el-button @click="navigator()">跳转至子应用vue2-用户管理</el-button> -->
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
import microApp from '@micro-zoe/micro-app'

function navigator() {
  microApp.router.push({ name: 'appname-vue2', path: '/user-management' })
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
