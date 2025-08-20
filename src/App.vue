<template>
  <ToastOverlay />
  <NavBar />
  <RouterView />
 
</template>
<script setup lang="ts">
import NavBar from "./layout/NavBar.vue";
import ToastOverlay from "./layout/ToastOverlay.vue";
</script>

