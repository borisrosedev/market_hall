import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { createVuePlugin } from "harlem";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import LoginPage from "./pages/LoginPage.vue";
import LandingPage from "./pages/LandingPage.vue";
import SignupPage from "./pages/SignupPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";
import ProductsPage from "./pages/ProductsPage.vue";
import DashboardPage from "./pages/session-required-pages/DashboardPage.vue";
import ContactUs from "./pages/ContactUs.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: LandingPage,
      alias: "/landing",
    },
    {
      path: "/login",
      component: LoginPage,
      alias: "/signin",
    },
    {
      path: "/signup",
      component: SignupPage,
      alias: "/register",
    },
    {
      path: "/products",
      component: ProductsPage,
    },
    {
      path: "/contactus",
      component: ContactUs,
    },

    {
      path: "/dashboard",
      component: DashboardPage,
      name: "dashboard",
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundPage,
    },
  ],
});

createApp(App)
  .use(createPinia())
  .use(createVuePlugin())
  .use(router)
  .mount("#app");
