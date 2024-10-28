import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   // 因为主应用为history路由，appname-vite子应用是hash路由，这里配置略微不同
  //   // 已解决带参数时页面丢失的问题
  //   path: "/app-vite:page*",
  //   name: "vite",
  //   component: () => import("./views/vite.vue"),
  // },
  {
    path: "/app-vue2",
    name: "app-vue2",
    component: () => import("./views/vue2.vue"),
  },
  {
    path: "/app-vue3",
    name: "app-vue3",
    component: () => import("./views/vue3.vue"),
  },
];

const router = createRouter({
  // 设置主应用基础路由为main-vite(用于后续部署)，则子应用基础路由(baseroute)为/main-vite/xxx
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
