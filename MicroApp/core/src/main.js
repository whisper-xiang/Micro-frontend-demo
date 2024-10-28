import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import microApp from "@micro-zoe/micro-app";

// 初始化 micro-app
microApp.start();

// 创建并挂载 Vue 应用
createApp(App).mount("#app");
