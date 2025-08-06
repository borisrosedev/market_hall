<template>
  <main class="app__main landing__main">
   

    <!-- Mileu Section -->
     <section class="row justify-content-center w-100 milieu-page-content"> 
     
      <h1>{{ title }}</h1>
      <p>{{ description }} </p>
      <p></br> </br> </br> <a href="#" class="cta-button">{{ collectionText }}</a> </p>
       
       
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
  background-color:   #8b4513 ;
  color: white;
}

.milieu-page-content {
  background-image: url("https://www.roseandmoore.fr/cdn/shop/files/table-bois-extensible.jpg?v=1694160047&width=823");
  background-repeat: no-repeat;
  text-align: center;
  padding: 2rem;
}
</style>
