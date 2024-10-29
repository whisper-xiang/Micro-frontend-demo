import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user-management",
    name: "user-management",
    component: () => import("./views/user.vue"),
  },
  {
    path: "/enterprise-management",
    name: "enterprise-management",
    component: () => import("./views/enterprise.vue"),
  },
];

export default routes;
