import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // dynamic segments start with a colon
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/Index.vue")
  },
  {
    path: "/endpoints",
    name: "endpoints",
    component: () => import("@/pages/Endpoints.vue")
  },
  {
    path: "/users",
    name: "users",
    component: () => import("@/pages/Users.vue")
  },
  {
    path: "/settings",
    name: "settings",
    compoenent: () => import("@/pages/Settings.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
