import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:mode/payment/:category?",
    name: "form",
    component: () => import("../views/Form.page.vue"),
  },

  // {
  //   path: "/edit/payment/:category?",
  //   name: "EditForm",
  //   component: () => import("../views/Form.page.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
