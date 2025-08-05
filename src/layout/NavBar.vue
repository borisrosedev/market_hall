<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
<nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Market Hall</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/landing">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/signin">Login</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/register">Signup</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More
            </a>
            <ul class="dropdown-menu">
              <li><RouterLink class="dropdown-item" to="/">Contact Us</RouterLink></li>
              <li><RouterLink class="dropdown-item" to="/">About Us</RouterLink></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>



</template>