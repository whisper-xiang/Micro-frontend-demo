<template>
  <div id="sidebar-app">

    <el-menu class="el-menu-vertical-demo" :default-active="activeIndex" @select="select">
      <el-menu-item index="/">
        <span slot="title">主应用</span>
      </el-menu-item>
      <!-- 菜单(el-submenu) index为子应用名称，子菜单(el-menu-item) index为路由地址 -->
      <!-- <el-sub-menu index="appname-vue2">
        <template #title>
          <span>Navigator One</span>
        </template>
<el-menu-item index="/app-vue2">
  <span class='menu-item-text'>home</span>
</el-menu-item>
<el-menu-item index="/app-vue2/page2">
  <span class='menu-item-text'>page2</span>
</el-menu-item>
</el-sub-menu> -->

      <el-menu-item index="/app-vue2">
        <span class='menu-item-text'>vue2</span>
      </el-menu-item>
      <el-menu-item index="/app-vue3">
        <span class='menu-item-text'>vue3</span>
      </el-menu-item>

    </el-menu>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const activeIndex = ref('/'); // 当前激活菜单的 index

onMounted(() => {
  getActiveIndex();

  // 监听浏览器前进后退按钮，激活对应菜单
  window.addEventListener('popstate', getActiveIndex);

  // 判断微前端环境
  if (window.__MICRO_APP_ENVIRONMENT__) {
    // 获取基座下发的数据
    const microAppData = window.microApp.getData();

    // 全局数据监听，监听来自其它子应用页面跳转，控制侧边栏的菜单展示
    // 因为子应用之间无法直接通信，这里采用全局数据通信
    window.microApp.addGlobalDataListener((data) => {
      console.log('全局数据:', data);
      getActiveIndex();
    });
  }
});

// 根据url地址获取选中菜单
const getActiveIndex = () => {
  // location.pathname的值通常为：/main-angular11/app-vue2/page2，我们只取`/app-vue2/page2`
  const pathArr = location.pathname.match(/\/app-.+/);
  activeIndex.value = pathArr ? pathArr[0].replace(/\/$/, '') : '/';

  let hash = '';
  if (location.hash) {
    hash = location.hash.split('?')[0];
  }
  // 兼容 child-vite 和 child-react17 子应用，因为它们是hash路由
  if (
    (activeIndex.value === '/app-vite' || activeIndex.value === '/app-react17') &&
    hash.includes('page2')
  ) {
    activeIndex.value += hash.replace(/^#/, '');
  }

  // 去除斜线后缀，如：/app-vue2/ 转换为 /app-vue2
  if (activeIndex.value !== '/') {
    activeIndex.value = activeIndex.value.replace(/\/$/, '');
  }

  return activeIndex.value;
};

// 用户点击菜单时控制基座应用跳转
const select = (index, indexPath) => {
  // if (window.microAppData) {
  //   // 因为 child-vite 和 child-react17 子应用是hash路由，所以需要传递hash值
  //   let hash = null;
  //   if (index === '/app-vite/page2' || index === '/app-react17/page2') {
  //     const pathArr = index.split('/');
  //     index = '/' + pathArr[1];
  //     hash = '/' + pathArr[2];
  //   }

  //   // 获取子应用appName
  //   const appName = indexPath[0];

  //   console.log('子应用跳转:', appName, index, hash);

  //   // 控制基座跳转页面，并渲染子应用
  //   // window.microAppData.pushState(appName, index, hash);
  // }
  router.push(index);
};
</script>

<style>
#sidebar-app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: inline-block;
  border-right: 1px solid rgb(230, 230, 230);
}

h4 {
  font-weight: revert;
}

.el-menu-item {
  font-size: 16px;
}

.el-menu {
  width: 200px;
  border-right: none;
}

.submenu-text {
  font-size: 16px;
  user-select: none;
}

.menu-item-text {
  font-size: 14px;
  user-select: none;
}
</style>
