import Vue from "vue";
import VueRouter from "vue-router";
import Products from "@/components/Products.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Products",
    component: Products
  },
  {
    path: "/add-product",
    name: "AddProduct",
    component: () => import("../components/AddProduct.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/product-details/:id",
    name: "ProductDetails",
    component: () => import("../components/ProductDetails.vue")
  },
  {
    path: "/edit-product/:id",
    name: "EditProduct",
    component: () => import("../components/EditProduct.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../components/Register.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../components/Dashboard.vue"),
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("token") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
