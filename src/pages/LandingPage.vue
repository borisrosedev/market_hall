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

    <footer class="app__footer">
      <p>{{ footerText }}</p>
      <!-- p>{{ footerText }}</!-->
    </footer>
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
.landing__main {
  background-color: rgba(139, 69, 19, 0.3);
  padding: 2rem;
}
.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #8b4513, #a0522d);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 69, 19, 0.3);
  position: relative;
  overflow: hidden;
  animation: bounceIn 1.5s ease-out;
}
.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(139, 69, 19, 0.4);
}

.cta-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s ease;
}

.cta-button:hover::before {
  left: 100%;
}

.milieu-page-content {
  display: inline-block;
  background-image: url("../assets/images/landing-background.png");
  background-repeat: no-repeat;

  background-position: center;
  text-align: center;
  padding: 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 2rem;
  animation: fadeInUp 1s ease-out;
}
.milieu-page::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at center,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
}
.milieu-page-h1 {
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: slideInFromLeft 1.2s ease-out;
  font-size: 2.5rem;
}
.milieu-page-p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #f0f0f0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  animation: slideInFromRight 1.2s ease-out;
}

.milieu-page {
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.milieu-page::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at center,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
}
.app__footer {
  background: linear-gradient(135deg, #2c2c2c, #1a1a1a);
  color: white;
  padding: 3rem 0 1rem;
  position: relative;
  overflow: hidden;
}
</style>
