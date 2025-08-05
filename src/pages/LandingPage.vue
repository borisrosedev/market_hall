<template>
  <main class="app__main landing__main">
    <!-- Header -->
    <section>
      <nav>
        <a href="#">{{ title }}</a>
      </nav>
    </section>

    <!-- Mileu Section -->
    <section class="milieu-page-content">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <a href="#" class="cta-button">{{ collectionText }}</a>
    </section>
  </main>
</template>

<script setup lang="ts">
const title = "Market Hall";
const description =
  "Découvrez des antiquités authentiques et des pièces d'exception";
const collectionText = "Explorer la Collection";
// Static data
const exampleText =
  "En saisissant Table type Louis XVI dans la barre de recherche, vous trouverez des tables de ce type avec les Prix proposés par les particuliers (commission incluse).";

const footerText =
  "© 2025 Market Hall. Tous droits réservés. | Antiquités authentiques depuis 2025";
</script>

<style>
.milieu-page-content {
  background-image: url("@/assets/img/fond.jpg");
  text-align: center;
  padding: 2rem;
}
</style>
