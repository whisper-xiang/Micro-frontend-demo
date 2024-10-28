import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import microApp from "@micro-zoe/micro-app";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 初始化 micro-app
microApp.start();

const app = createApp(App);
app.config.compilerOptions.isCustomElement = (tag) => tag === "micro-app";
// 创建并挂载 Vue 应用
app.use(ElementPlus).use(router).mount("#app");
