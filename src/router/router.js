import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import FaqPage from "@/pages/FaqPage.vue";
import RegisterUser from "@/pages/RegisterUser.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/faq", component: FaqPage },
  { path: "/register", component: RegisterUser },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
