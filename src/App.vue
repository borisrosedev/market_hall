<template>
  
  <ToastOverlay />
  <NavBar />
  <RouterView />
  <FooterBar />
</template>
<script setup lang="ts">
import 'animate.css'; 
import NavBar from "./layout/NavBar.vue";
import ToastOverlay from "./layout/ToastOverlay.vue";
import FooterBar from "./layout/FooterBar.vue";
</script>

