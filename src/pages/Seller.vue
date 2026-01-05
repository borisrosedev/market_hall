<template>
  <main class="seller-page">
    <h1>{{ seller.name }}</h1>

    <!-- Info vendeur -->
    <section class="seller-info">
      <p><strong>Localisation :</strong> {{ seller.location }}</p>
      <p><strong>Description :</strong> {{ seller.description }}</p>
      <p><strong>Note :</strong> {{ seller.rating }}/5 ({{ seller.reviews_count }} avis)</p>
      <p><strong>Produits :</strong> {{ seller.products_count }}</p>
      <p><strong>Membre depuis :</strong> {{ seller.members_since }}</p>
    </section>

    <!-- Produits du vendeur -->
    <section class="products-section">
      <h2>Ses produits ({{ products.length }})</h2>
      
      <div class="products-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p class="price">{{ product.price }}€</p>
          <p class="rating">{{ product.rating }} ({{ product.reviews }} avis)</p>
          <router-link :to="`/product/${product.id}`" class="btn-details">
            Voir détails
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const sellerId = route.params.id;

// Infos du vendeur
const seller = ref({
  id: sellerId || "seller-1",
  name: "Maison Dubois Antiquités",
  location: "Paris, France",
  description: "Expert en antiquités depuis 30 ans. Sélection rigoureuse de pièces authentiques.",
  rating: 4.9,
  reviews_count: 450,
  members_since: "2010",
  products_count: 156,
});

// Produits du vendeur
const products = ref([
  {
    id: "prod-1",
    name: "Secrétaire Louis XVI",
    price: 2850,
    // image: "https://via.placeholder.com/200x200?text=Secretary",
    rating: 4.8,
    reviews: 129,
  },
  {
    id: "prod-2",
    name: "Commode Baroque",
    price: 1500,
    image: "https://via.placeholder.com/200x200?text=Commode",
    rating: 4.7,
    reviews: 87,
  },
  {
    id: "prod-3",
    name: "Bureau Napoléon",
    price: 3200,
    image: "https://via.placeholder.com/200x200?text=Desk",
    rating: 4.9,
    reviews: 156,
  },
  {
    id: "prod-4",
    name: "Miroir Rococo",
    price: 890,
    image: "https://via.placeholder.com/200x200?text=Mirror",
    rating: 4.6,
    reviews: 64,
  },
]);
</script>

<style scoped>
.seller-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

.seller-info {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

.seller-info p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 15px;
}

.products-section {
  margin-top: 40px;
}

h2 {
  font-size: 1.8rem;
  color: #8b4513;
  margin-bottom: 30px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 25px;
}

.product-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.product-card h3 {
  padding: 15px;
  margin: 0;
  font-size: 1rem;
  color: #333;
}

.price {
  padding: 0 15px;
  font-size: 1.3rem;
  font-weight: 700;
  color: #8b4513;
  margin: 0;
}

.rating {
  padding: 0 15px 15px 15px;
  color: #999;
  font-size: 0.9rem;
  margin: 0;
}

.btn-details {
  display: block;
  padding: 12px 15px;
  background-color: #8b4513;
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;
}

.btn-details:hover {
  background-color: #6b3410;
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.8rem;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>