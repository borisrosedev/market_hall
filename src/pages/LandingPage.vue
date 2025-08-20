<template>
  <main class="app__main landing__main">
    <!-- Mileu Section -->
    <section class="middle-page-content">
      <header class="middle-header">
        <h1 class="middle-page-h1">{{ title }}</h1>
        <p class="middle-page-p">{{ description }}</p>
      </header>
      <a href="#" class="cta-button">
        <RouterLink to="/products" class="cta-button">{{
          collectionText
        }}</RouterLink></a
      >
    </section>
  </main>
  <!-- Scroll to top button -->
  <button class="scroll-top" id="scrollTop">↑</button>
</template>

<script setup lang="ts">
const title = "Market Hall";
const description =
  "Découvrez des antiquités authentiques et des pièces d'exception";
const collectionText = "Explorer la Collection";
// Static data
const exampleText =
  "En saisissant Table type Louis XVI dans la barre de recherche, vous trouverez des tables de ce type avec les Prix proposés par les particuliers (commission incluse).";

// Scroll to top functionality
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (!scrollTopBtn) return;
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.landing__main {
  background-color: rgba(139, 69, 19, 0.3);
  padding: 2rem;
  align-items: center;
  justify-content: center;
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

.middle-header {
  animation: fadeInUp 1s ease-out;
}
.middle-page-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url("../assets/images/landing-background.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  height: 500px;

  /*position: relative;*/
  /*overflow: hidden;*/

  position: relative;
  /*z-index: 2;*/
}
.middle-page::before {
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
.middle-page-h1 {
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: slideInFromLeft 1.2s ease-out;
  font-size: 2.5rem;
}
.middle-page-p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #f0f0f0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  animation: slideInFromRight 1.2s ease-out;
}

.middle-page {
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.middle-page::before {
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

.scroll-top.visible {
  opacity: 1;
  visibility: visible;
}

.scroll-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(139, 69, 19, 0.4);
}
</style>
