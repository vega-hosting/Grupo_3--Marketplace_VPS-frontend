import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import FaqPage from "@/pages/FaqPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import LoginPageAdmin from "@/pages/LoginPageAdmin.vue";
import RegisterUser from "@/pages/RegisterUser.vue";
import PlansPage from "@/pages/PlansPage.vue";
import ConfigVpsPage from "@/pages/ConfigVpsPage.vue";
import AdminGestion from "@/pages/AdminGestionPage.vue";
import AdminStock from "@/pages/AdminStockPage.vue";
import ShoppingPage from "@/pages/ShoppingPage.vue";
import SucessfulPurchase from "@/pages/SucessfulPurchase.vue";
import ModifyUser from "@/pages/ModifyUser.vue";
import SuscriptionUser from "@/pages/SuscriptionUser.vue";
import AddNewPlan from "@/pages/AddNewPlan.vue"

const routes = [
  { path: "/", component: HomePage },
  { path: "/faq", component: FaqPage },
  { path: "/login", component: LoginPage },
  { path: "/loginAdmin", component: LoginPageAdmin },
  { path: "/register", component: RegisterUser },
  { path: "/plans", component: PlansPage },
  { path: "/shopping", component: ShoppingPage},
  { path: "/config-vps", component: ConfigVpsPage },
  { path: "/adminGestion", component: AdminGestion },
  { path: "/adminStock", component: AdminStock },
  { path: "/shopping/success", component: SucessfulPurchase },
  { path: "/modify-account", component: ModifyUser },
  { path: "/suscriptions", component: SuscriptionUser },
  { path: "/addPlan", component: AddNewPlan },

];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
