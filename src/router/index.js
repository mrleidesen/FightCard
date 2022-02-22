import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/HomePage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
  ],
});

export default router;
