<template>
  <main class="order-page">
    <h1>Ma Commande</h1>
    <!-- afficher les articles  -->
    <section>
        <h2>Articles : {{ cartItems.length }}</h2>
        <!-- boucler les articles  -->
         <div v-for="(item, index) in cartItems" :key="index">
            <h3>{{ item.name }}</h3>
            <p>Prix : {{ item.price }} </p>
            <div>
                <button @click="decreaseQty(index)">-</button>
                <span>Quantité : {{ item.quantity }}</span>
                <button @click="increaseQty(index)">+</button>
            </div>
            <p><strong> Total: {{ (item.price * item.quantity).toFixed(2) }}</strong></p>
         </div>
         <div class="summary">
            <p>Sous-total: {{ subtotal.toFixed(2) }}</p>
            <p>Frais de port: {{ shipping.toFixed(2) }}</p>
            <p>TVA (20%): {{ tax.toFixed(2) }}</p>
            <h2>Total: {{ total.toFixed(2) }}</h2>
         </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";


    
    const cartItems = ref ([
        {
        id: "prod-1",
        name : "Produite de test créé par YAYA",
        price : 5,
        quantity : 1,
        
        },

        {
            id: "prod-2",
            name: "Commande de test",
            price : 8,
            quantity: 2,
        }

    ])
// Calculer le sous-total
    const subtotal = computed(() =>  {
        return cartItems.value.reduce((sum, item) =>{
            return sum + (item.price * item.quantity);
        },0) // le 0 pour dire qu'on commence la calcul de 0 
    })

    // port gratiut en fonction si la commande est > 50 euro
    const shipping = computed(() =>{
        return subtotal.value > 50 ? 0 : 9.99;
    })

    // total final 
    const total = computed(() => {
        return subtotal.value + shipping.value + tax.value
    })

    // tva 
    const tax = computed(() => {
        const beforTax = subtotal.value + shipping.value;
        return beforTax * 0.2;
    })
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
  background-color: rgba(139, 69, 19, 0.3);
}

button {
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
}

hr {
  margin: 30px 0;
}

.summary {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  font-size: 16px;
}

.summary p {
  margin: 10px 0;
}

.summary h2 {
  margin-top: 15px;
  color: #D4AF37;
}
</style>