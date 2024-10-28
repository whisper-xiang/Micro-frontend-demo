import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

const app = new Vue({
  render: (h) => h(App),
}).$mount("#app");

// 卸载应用
window.unmount = () => {
  app.$destroy();
};
