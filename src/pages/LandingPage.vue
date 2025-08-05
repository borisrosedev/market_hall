<template>
  <main class="app__main">
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <p>
      <strong>Exemple :</strong> En saissant Table type Louis XVI dans la barre
      de recherche, vous trouverez des tables de ce type avec les Prix proposés
      par le particuliers (commision inclus).
    </p>
    <div :id="`p-${count}`">Super {{ count }}</div>
    <div :style="{ color: count > 5 ? 'red' : 'green' }">Super {{ count }}</div>
    <div :class="{ active: true }">Super {{ count }}</div>
    <div :class="{ active: count > 5 ? 'red' : 'green' }">
      Super {{ count }}
    </div>
    <button @click="increment">Incrémenter</button>
  </div>
  </main>
</template>
<script setup>
import { ref } from "vue";
//setInterval(()

const count = ref(0);
const increment = (event) => {
  console.log(event);
  count.value++;
};
const title = "Market Hall";
const description = "Site de vente en ligne d'antiquités";
</script>

<style>
.active {
  color: red;
}
</style>
