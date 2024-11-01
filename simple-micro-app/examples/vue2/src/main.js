import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// vue2/src/main.js

import SimpleMicroApp from "../../../src/index";

SimpleMicroApp.start();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
