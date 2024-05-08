import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import FaqPage from "@/pages/FaqPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/faq", component: FaqPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
