import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import FaqPage from "@/pages/FaqPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import LoginPageAdmin from "@/pages/LoginPageAdmin.vue";
import RegisterUser from "@/pages/RegisterUser.vue";
import PlansPage from "@/pages/PlansPage.vue";
import ConfigVpsPage from "@/pages/ConfigVpsPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/faq", component: FaqPage },
  { path: "/login", component: LoginPage },
  { path: "/loginAdmin", component: LoginPageAdmin },
  { path: "/register", component: RegisterUser },
  { path: "/plans", component: PlansPage },
  { path: "/config-vps", component: ConfigVpsPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
