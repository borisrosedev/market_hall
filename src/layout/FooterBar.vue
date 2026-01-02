<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="app__footer">
    <section class="app__footer-content">
      <div class="app__footer-section">

        <ul class="app__footer-ul">
          <h3>About</h3>
          <li class="nav-item"><RouterLink to="/about">Our story</RouterLink></li>
          <li class="nav-item"><RouterLink to="/team">Our team</RouterLink></li>
        </ul>
      </div>

      <div class="app__footer-section">

        <ul class="app__footer-ul">
          <h3>Link</h3>
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/landing">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/products">Products</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/product-detail">Products details</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/seller">Saller</RouterLink>
          </li>
        </ul>
      </div>

      <div class="app__footer-section">

        <ul class="app__footer-ul">
          <h3>Contact</h3>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contactus">Contact Us</RouterLink>
          </li>

          <li class="nav-item"><RouterLink to="/support">Service client</RouterLink></li>
          

        </ul>
      </div>

      <div class="app__footer-section">
        <ul class="app__footer-ul">
          <h3>Connexion</h3>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/signin">Login</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/register">Signup</RouterLink>
          </li>
        </ul>

        <div class="social-links">
          <ul class="app__footer-ul">
            <a href="https://facebook.com" target="_blank" class="social-link" title="Facebook">
              f
            </a>
            <a href="https://x.com" target="_blank" class="social-link" title="X (Twitter)">
              𝕏
            </a>
          </ul>
        </div>
      </div>
    </section>
    <p class="app__footer-bottom">
      © 2025 Market Hall. Tous droits réservés. | Antiquités authentiques depuis
      2025
    </p>
    <!-- p>{{ footerText }}</!-->
  </footer>
</template>

<style scoped>
.app__footer {
  background: linear-gradient(135deg, #2c2c2c, #1a1a1a);
  color: white;
  padding: 3rem 0 1rem; 
  position: relative;
  overflow: hidden;

}

.app__footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #8b4513, transparent);
}

.app__footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.app__footer-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.5rem, 3vw, 2rem);

  margin-bottom: 2rem;
}


.app__footer-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.app__footer-section h3 {
  color: #8b4513;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 1px;
  border-bottom: 3px solid #8b4513;
  padding-bottom: 0.5rem;
  align-self: left;
  width: 100%;
}



.app__footer-section:first-child {
  padding-left: 2rem;
}


.app__footer-section:last-child {
  padding-right: 2rem;
}


.app__footer-section ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
}

.app__footer-section li {
  margin-bottom: 0;
  padding-left: 1rem;
  position: relative;
}

.app__footer-section li::before {
  content: ">";
  color: #8b4513;
  position: absolute;
  left: 0;
  opacity: 0.7;
}

.app__footer-section a {
  color: #ccc;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  font-weight: 400;
  font-size: 1rem;
}

.app__footer-section a:hover {
  color: #8b4513;
  transform: translateX(5px);
}


.app__footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #444;
  color: #999;
}

.social-links {
  display: flex;
  margin-left: 0;
  padding-left: 0;
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
}

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

/* Large mobile */
@media (max-width: 480px) {
  .app__footer-section h3 {
    text-align: left;
  }

  .app__footer-section {
    padding-right: 2rem;
    text-align: left;
  }

  .app__footer-section li { 
    padding-left: 0;
  } 

  .app__footer-section li::before { 
    display: none;
  }

  .app__footer-section:first-child {
    padding-left: 0rem;
  }

  .app__footer-section:last-child {
    padding-right: 2rem;
  }
}

/* Tablet */
@media (min-width: 768px) {

  .app__footer-section:first-child {
    padding-left: 0rem;
  }

  .app__footer-section:last-child {
    padding-right: 0rem;
  }

  .app__footer-section a:hover {
    transform: translateX(5px);
  }

  .app__footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .app__footer-section:first-child {
    padding-left: 1rem;
  }

  .app__footer-section:last-child {
    padding-right: 1rem;
  }

  .app__footer-content {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
</style>
