<template>
  <div id="sidebar-app">
    <el-menu class="el-menu-vertical-demo" :default-active="activeIndex" @select="select">
      <el-menu-item index="/">
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/user-management">
        <span class='menu-item-text'>用户管理</span>
      </el-menu-item>
      <el-menu-item index="/enterprise-management">
        <span class='menu-item-text'>企业管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '/' // 当前激活菜单的 index
    };
  },
  mounted() {
  },
  methods: {
    // 用户点击菜单时控制基座应用跳转
    select(index, indexPath) {
      this.$router.push(index);
    }
  }
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
