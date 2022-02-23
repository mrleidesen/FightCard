import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/HomePage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/game",
      component: () => import("@/views/GamePage.vue"),
    },
  ],
});

export default router;
