// router/index.ts
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: () => import("../views/Catalog.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../views/Account.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  // Pages du footer
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/faq",
    name: "FAQ",
    component: () => import("../views/FAQ.vue"),
  },
  {
    path: "/team",
    name: "Team",
    component: () => import("../views/Team.vue"),
  },
  {
    path: "/values",
    name: "Values",
    component: () => import("../views/Values.vue"),
  },
  {
    path: "/authentication",
    name: "Authentication",
    component: () => import("../views/Authentication.vue"),
  },
  {
    path: "/support",
    name: "Support",
    component: () => import("../views/Support.vue"),
  },
  {
    path: "/showroom",
    name: "Showroom",
    component: () => import("../views/Showroom.vue"),
  },
  {
    path: "/appointment",
    name: "Appointment",
    component: () => import("../views/Appointment.vue"),
  },
  {
    path: "/buying-guide",
    name: "BuyingGuide",
    component: () => import("../views/BuyingGuide.vue"),
  },
  {
    path: "/delivery",
    name: "Delivery",
    component: () => import("../views/Delivery.vue"),
  },
  {
    path: "/warranty",
    name: "Warranty",
    component: () => import("../views/Warranty.vue"),
  },
  // Gestion des erreurs 404
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },

  // Un nouvelle route pour la page À propos de nous
  {
    path: "/about",
    name: "AboutUs",
    component: () => import("../pages/AboutUsPage.vue"),
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
