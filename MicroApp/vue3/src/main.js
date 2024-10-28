import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.config.compilerOptions.isCustomElement = (tag) => tag === "micro-app";

app.mount("#app");

// 配置 Vue 编译器，将 <micro-app> 元素识别为自定义元素

// 卸载应用
window.unmount = () => {
  app.unmount();
};
