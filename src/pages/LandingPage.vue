<template>
  <main class="app__main landing__main">
    <!-- Mileu Section -->
    <section class="row justify-content-center w-100 milieu-page-content">
      <h1 class="milieu-page-h1">{{ title }}</h1>
      <p class="milieu-page-p">{{ description }}</p>
      <p>
        <a href="#" class="cta-button">{{ collectionText }}</a>
      </p>
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

<style scoped>
.cta-button {
  color: #8b4513;
}

.milieu-page-content {
  display: inline-block;
  background-image: url("../assets/images/landing-background.jpg");
  background-repeat: no-repeat;

  background-position: center;
  text-align: center;
  padding: 2rem;
  font-size: 1.1rem;
  font-weight: bold;
}

.milieu-page-h1 {
  font-size: 2.5rem;
}
.milieu-page-p {
  font-size: 1.2rem;
}
</style>
