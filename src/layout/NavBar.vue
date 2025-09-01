

<template>
  <nav class="navbar bg-body-tertiary fixed-top">
    <div class="container-fluid justify-content-between">
      <router-link class="navbar-brand" to="/">Market Hall</router-link>
      


      <div class="d-flex align-items-center" v-fi>
        <button v-if="isConnected" class="btn btn-outline-info mx-3 position-relative" @click="onCart">
            <i style="font-size: 14px;" class="bi bi-bag-fill"></i>     
          <span v-if="getCart?.items?.length > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
          {{ getCart.items.length }}
            <span class="visually-hidden">cart items count</span>
          </span>
        </button>
      
          <form class="d-flex mx-5" role="search" v-if="$route.fullPath == '/products'">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
       

      
     
    


      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <RouterLink
                class="nav-link active"
                aria-current="page"
                to="/landing"
                >Home</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink
                class="nav-link active"
                aria-current="page"
                to="/products"
                >Products</RouterLink
              >
            </li>
             <li class="nav-item" v-if="isConnected">
              <RouterLink
                class="nav-link active"
                aria-current="page"
                to="/dashboard"
                >Dashboard</RouterLink
              >
            </li>
            <li class="nav-item" v-if="isConnected">
              <RouterLink
                class="nav-link active"
                aria-current="page"
                to="/cart"
                >Cart</RouterLink
              >
            </li>
            <li v-if="isConnected">
              <button class="nav-link btn btn-outlined-danger" @click="confirmLogout">Log out</button>
            </li>


            <li class="nav-item" v-if="!isConnected">
              <RouterLink class="nav-link" to="/signin">Login</RouterLink>
            </li>
            <li class="nav-item" v-if="!isConnected">
              <RouterLink class="nav-link" to="/register">Signup</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/contactus"
                >Contact Us</RouterLink
              >
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul class="dropdown-menu">
                <li>
                  <RouterLink class="dropdown-item" to="/">About Us</RouterLink>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { isConnected } from "../stores/auth-store";
import { onMounted, onUpdated } from "vue";
import { useUserAuth } from "../composables/useUserAuth"
import { useRouter, useRoute } from "vue-router"
import { useMessagesStore } from "../stores/messages-store";
import { getCart } from "../stores/cart-store"
const userAuth = useUserAuth()
const router = useRouter()
const route = useRoute()
const { showToast, hideToastNow } = useMessagesStore()


/**
 * when the component mounts it automatically calls the checkAuth function 
 * from the composable which sends a http request -> /me 
 * applying the "complete mediation" principle 
 * @param callback 
 */
onMounted(async() => {
  console.log(route)
  await userAuth.checkAuth()
})






const onLogout = async() => {
 const isLoggedOut = await userAuth.logoutUser()
 if(isLoggedOut){
    router.push('login')
    hideToastNow()
 }
}

const onCart = () => {
  router.push('cart')
}
const onCancel = () => {
  hideToastNow()
}

const confirmLogout = () => {
  showToast({
    summary: 'Confirmation',
    detail: 'Are you sure you want to log out ?',
    type: 'info',
    actions: [
      {
        content: 'Yes',
        handler: onLogout
      },
      {
        content: 'No',
        handler: onCancel
      }
    ]
  })
}


</script>