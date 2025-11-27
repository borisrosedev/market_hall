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
import AboutUsPage from "./pages/AboutUsPage.vue"; // importer la nouvelle page À propos de nous
import DashboardPage from "./pages/session-required-pages/DashboardPage.vue";
import ContactUs from "./pages/ContactUs.vue";
import CartPage from "./pages/session-required-pages/CartPage.vue";
import OrderPage from "./pages/session-required-pages/OrderPage.vue";
import OrderAddress from "./pages/session-required-pages/order-pages/OrderAddress.vue";
import OrderSummary from "./pages/session-required-pages/order-pages/OrderSummary.vue";

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
    // creation de la route pour la page À propos de nous
    {
      path: "/about",
      component: AboutUsPage,
      name: "about-us",
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
      path: "/cart",
      component: CartPage,
      name: "cart",
    },
    {
      path: "/order",
      component: OrderPage,
      name: "order",
      children: [
        {
          path: "",
          component: OrderAddress,
        },
        {
          path: "summary",
          component: OrderSummary,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundPage,
    },
  ],
});

const app = createApp(App);

app.use(createPinia()).use(createVuePlugin()).use(router).mount("#app");

app.directive("mix", {
  created(el, binding, vnode) {
    console.log("🌍 [Global Directive / mix ] activated ✅");
    console.log("--> dom-element", el);
    console.log("--> arg", binding.arg);
    console.log("--> value", binding.value);
    console.log("--> modifiers", binding.modifiers);

    if (binding.modifiers) {
      if ("success" in binding.modifiers) el.classList.add("text-success");
      if ("alert" in binding.modifiers) el.classList.add("text-danger");
    }

    if (!binding.arg && binding.value) {
      if ("color" in binding.value) el.style.color = binding.value.color;
      if ("fw" in binding.value) el.style.fontWeight = binding.value.fw;
    }

    if (binding.arg) {
      if (binding.arg == "color") el.style.color = binding.value.color;
      if (binding.arg == "fw") el.style.fontWeight = binding.value.fw;
    }
  },
});
