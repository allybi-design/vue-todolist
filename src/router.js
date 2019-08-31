import Vue from "vue";
import Router from "vue-router";
import Index from "./views/index.vue";
import About from "./views/about.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Index
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
