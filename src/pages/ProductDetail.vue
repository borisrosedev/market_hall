<template>
  <main class="order-page">
    <h1>Ma Commande</h1>
    <!-- afficher les articles  -->
    <section class="">
        <h2>  {{ cartItems.length }} : Articles </h2>
        <!-- boucler les articles  -->
         <div v-for="(item, index) in cartItems" :key="index">
            <h3>{{ item.name }}</h3>
            <p>Prix : {{ item.price }} </p>
            <div>
                <button @click="decreaseQty(index)">-</button>
                <span>Quantité : {{ item.quantity }}</span>
                <button @click="increaseQty(index)">+</button>
            </div>
         </div>
    </section>
  </main>
</template>

<script setup lang="ts">
    import { ref } from "vue";

    const cartItems = ref ([
        {
        id: "prod-1",
        name : "Produite de test créé par YAYA",
        price : 555,
        quantity : 1,
        
        },

        {
            id: "prod-2",
            name: "Commande de test",
            price : 85545,
            quantity: 1,
        }

    ])

    // une fonction pour augmenter la quantité 
    function increaseQty(index: number) {
        // vérifier que la quantité n'est pas très grand 
        if(cartItems.value[index].quantity < 10 )  {
            cartItems.value[index].quantity++;
        }
    }

    // function pour déminuer la quantité 
    function decreaseQty(index : number) {
        if(cartItems.value[index].quantity > 1) {
            cartItems.value[index].quantity--
        }
    }
</script>

<style scoped>

    .order-page {
        padding: 40px;
    }
    
    button {
        padding: 5px 10px;
        margin: 0 5px;
        cursor: pointer;
    }
</style>