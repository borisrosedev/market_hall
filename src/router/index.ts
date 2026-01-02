// router/index.ts
import path from "path";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

// import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
  },
  // {
  //   path: "/catalog",
  //   name: "Catalog",
  //   component: () => import("../views/Catalog.vue"),
  // },
  // {
  //   path: "/search",
  //   name: "Search",
  //   component: () => import("../pages/Search.vue"),
  // },
  // {
  //   path: "/cart",
  //   name: "Cart",
  //   component: () => import("../pages/Cart.vue"),
  // },
  // {
  //   path: "/account",
  //   name: "Account",
  //   component: () => import("../pages/AccountPage.vue"),
  //   meta: { requiresAuth: true },
  // },
  {
    path: "/login",
    name: "Login",
    component: () => import("../pages/LoginPage.vue"),
  },
  // Pages du footer

  {
    path: "/contact",
    name: "Contact",
    component: () => import("../pages/ContactUs.vue"),
  },
  // {
  //   path: "/faq",
  //   name: "FAQ",
  //   component: () => import("../pages/FAQ.vue"),
  // },
  // {
  //   path: "/team",
  //   name: "Team",
  //   component: () => import("../pages/Team.vue"),
  // },
  // {
  //   path: "/values",
  //   name: "Values",
  //   component: () => import("../pages/Values.vue"),
  // },
  // {
  //   path: "/authentication",
  //   name: "Authentication",
  //   component: () => import("../pages/Authentication.vue"),
  // },
  // {
  //   path: "/support",
  //   name: "Support",
  //   component: () => import("../pages/Support.vue"),
  // },
  // {
  //   path: "/showroom",
  //   name: "Showroom",
  //   component: () => import("../pages/Showroom.vue"),
  // },
  // {
  //   path: "/appointment",
  //   name: "Appointment",
  //   component: () => import("../pages/Appointment.vue"),
  // },
  // {
  //   path: "/buying-guide",
  //   name: "BuyingGuide",
  //   component: () => import("../pages/BuyingGuide.vue"),
  // },

  {
    path: "/product/:id",
    name: "ProductDetail",
    component: () => import("../pages/ProductDetail.vue"),
  },
  // {
  //   path: "/delivery",
  //   name: "Delivery",
  //   component: () => import("../pages/Delivery.vue"),
  // },
  // {
  //   path: "/warranty",
  //   name: "Warranty",
  //   component: () => import("../pages/Warranty.vue"),
  // },

  {
    path: "/about",
    namespace: "AboutUs",
    Component: () => import("../pages/AboutUs.vue"),
  },

  {
    path: "/seller/:id",
    name: "Seller",
    component: () => import("../pages/Seller.vue"),
  },

  {
    path: "/order-review",
    name: "OrderReview",
    component: () => import("../pages/OrderReview.vue"),
  },
  // Gestion des erreurs 404
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../pages/NotFoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Guard de navigation pour les routes protégées
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("user_token"); // ou votre logique d'auth

  if (to.matched.some((record) => record.meta?.requiresAuth)) {
    if (!isAuthenticated) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
