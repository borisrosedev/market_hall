<template>
  <NavBar />
  <RouterView />
  <FooterBar />
</template>
<script setup lang="ts">
import NavBar from "./layout/NavBar.vue";
import FooterBar from "./layout/FooterBar.vue";
</script>
