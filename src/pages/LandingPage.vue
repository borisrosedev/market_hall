<template>
  <main class="app__main landing__main">
    <!-- Header -->
    <section class="header">
      <nav class="nav-container">
        <a href="#" class="logo">{{ title }}</a>
      </nav>
    </section>

    <!-- Mileu Section -->
    <section class="milieu-page">
      <section class="milieu-page-content">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <a href="#" class="cta-button">{{ collectionText }}</a>
      </section>
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
* {
  margin: 0;
  padding: 0;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #8b4513;
  text-decoration: none;
  transition: color 0.3s ease;
}

.logo:hover {
  color: #a0522d;
}

.nav-item-custom {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #2c2c2c;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  margin: 0 0.25rem;
}

.nav-item-custom:hover {
  background: linear-gradient(135deg, #8b4513, #a0522d);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(139, 69, 19, 0.3);
}

.nav-item-custom::before {
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

.nav-item-custom:hover::before {
  left: 100%;
}

.search-bar {
  position: relative;
  max-width: 300px;
}

.search-bar .form-control {
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  padding: 0.5rem 3rem 0.5rem 1rem;
  transition: all 0.3s ease;
}

.search-bar .form-control:focus {
  border-color: #8b4513;
  box-shadow: 0 0 0 0.2rem rgba(139, 69, 19, 0.25);
}

.search-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  cursor: pointer;
}

/* milieu-page Section */
.milieu-page {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23f5f5dc" width="1200" height="800"/><path fill="%238B4513" d="M200 400h800v200H200z"/><circle fill="%23654321" cx="250" cy="450" r="30"/><circle fill="%23654321" cx="950" cy="450" r="30"/><rect fill="%23D2691E" x="300" y="350" width="600" height="100"/><path fill="%23A0522D" d="M400 350h400v50H400z"/></svg>')
      center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
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

.milieu-page-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 2rem;
  animation: fadeInUp 1s ease-out;
}

.milieu-page h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: slideInFromLeft 1.2s ease-out;
}

.milieu-page p {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #f0f0f0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  animation: slideInFromRight 1.2s ease-out;
}

.milieu-page strong {
  color: #ffd700;
  font-size: 1.2rem;
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
  margin-top: 1rem;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(139, 69, 19, 0.4);
  color: white;
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

/* Scroll to top button */
.scroll-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #8b4513, #a0522d);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.scroll-top.visible {
  opacity: 1;
  visibility: visible;
}

.scroll-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(139, 69, 19, 0.4);
}

/* Footer */
.footer {
  background: linear-gradient(135deg, #2c2c2c, #1a1a1a);
  color: white;
  padding: 3rem 0 1rem;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #8b4513, transparent);
}

.footer h3 {
  color: #8b4513;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer ul {
  list-style: none;
  padding: 0;
}

.footer li {
  margin-bottom: 0.5rem;
}

.footer a {
  color: #ccc;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
}

.footer a:hover {
  color: #8b4513;
  transform: translateX(5px);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #8b4513, #a0522d);
  color: white;
  text-decoration: none;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 5px 15px rgba(139, 69, 19, 0.4);
  color: white;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #444;
  color: #999;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .milieu-page h1 {
    font-size: 2.5rem;
  }

  .milieu-page p {
    font-size: 1.2rem;
  }

  .search-bar {
    max-width: 200px;
  }
}
</style>
