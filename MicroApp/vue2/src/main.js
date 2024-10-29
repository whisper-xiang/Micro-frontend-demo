import Vue from "vue";
import App from "./App.vue";
import routes from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.config.ignoredElements = ["micro-app"];

const router = new VueRouter({
  mode: "hash",
  // __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
  base: window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL,
  routes,
});

Vue.use(ElementUI);

const app = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#vue2-app");

// 卸载应用
window.unmount = () => {
  app.$destroy();
};

window.onmount = (data) => {
  console.log("子应用已经渲染", window.__MICRO_APP_NAME__, data);
};

if (window.__MICRO_APP_ENVIRONMENT__) {
  console.log("我在微前端环境中");
}
