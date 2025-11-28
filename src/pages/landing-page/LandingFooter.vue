<template>
  <footer class="landing-footer">
    <section class="footer-content">
      <div class="footer-left">
        <h3>Market Hall</h3>
        <p>Votre place de marché pour les antiquités et objets rares.</p>
      </div>

      <nav class="footer-nav">
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/about">À propos</RouterLink>
        <RouterLink to="/contactus">Contact</RouterLink>
        <RouterLink to="/FAQ">FAQ</RouterLink>
      </nav>

      <div class="footer-right">
        <p>© 2025 Market Hall. Tous droits réservés.</p>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.landing-footer {
  background-color: #2A241E;
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
  font-family: "Inter", sans-serif;
  border-top: 2px solid #d4af37;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
}

.footer-left h3 {
  color: #d4af37;
  margin-bottom: 0.3rem;
}

.footer-nav {
  display: flex;
  gap: 1.5rem;
}

.footer-nav a {
  color: #d4af37;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-nav a:hover {
  color: #ffffff;
}

.footer-right {
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
