import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // dynamic segments start with a colon
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/Index")
  },
  {
    path: "/endpoints",
    name: "endpoints",
    component: () => import("@/pages/Endpoints")
  },
  {
    path: "/users",
    name: "users",
    component: () => import("@/pages/Users")
  }
];

const router = new VueRouter({
  routes
});

export default router;
