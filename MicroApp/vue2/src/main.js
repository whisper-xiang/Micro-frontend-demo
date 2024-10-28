import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.config.ignoredElements = ["micro-app"];

const app = new Vue({
  render: (h) => h(App),
}).$mount("#app");

// 卸载应用
window.unmount = () => {
  app.$destroy();
};
