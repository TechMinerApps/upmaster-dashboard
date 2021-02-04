import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // dynamic segments start with a colon
  { path: "/endpoints", component: () => import("@/pages/Endpoints") },
  { path: "/statuspages", component: () => import("@/pages/Statuspages") },
  { path: "/usermanage", component: () => import("@/pages/Usermanage") }
];

const router = new VueRouter({
  routes
});

export default router;
