<template>
    <main class="app__main products__main">
        <section class="products__list">
   
                <CustomCard 
                    v-if="products && products.length > 0"
                    v-for="(prod,i) in products as any" 
                    :obj="{ 
                        ...prod, 
                        classNames: 'product-card my-3', 
                        listItems: [
                            { 
                                content: `${prod.price} €` 
                            },
                        ]
                    }" 
                    :key="i"
                             
                >
                    <section class="product-card__buttons-section">
                        <CustomButton 
                            @click="(e) => onAddToCart(e, prod.id)"
                            :obj="{
                                content: 'Add to Cart',
                                classNames: 'btn-info' 
                            }"
                        />
                    </section>
                </CustomCard>
     
        </section>
    </main>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CustomCard from '../components/shared-components/CustomCard.vue';
import PRODUCTS from '../data-resources/data-local-resources/products'
import CustomButton from '../components/shared-components/CustomButton.vue';
import { useUserAuth } from "../composables/useUserAuth"
import { useMessagesStore } from "../stores/messages-store"
import { useRouter } from "vue-router"

const router = useRouter()
const products = ref([])
const isConnected = ref(false)
const messagesStore = useMessagesStore()
const { showToast, hideToastNow } = messagesStore
const { checkAuth } = useUserAuth()


onMounted(async() => {
    products.value = PRODUCTS as any
    isConnected.value = await checkAuth()
})


function navigateHandler(to: 'login' | 'signup' ): void {
    router.push(to)
    hideToastNow()
}


const onAddToCart = (e, id: number) => {
    if(!isConnected.value) {
        showToast({
            summary: 'Session required',
            detail: 'You need to log in to add it',
            type: 'info',
            actions: [{
                to: 'login',
                content: 'Log in',
                handler: navigateHandler
            }, {
                to: 'signup',
                content: 'Sign up',
                handler: navigateHandler
            }]
        })
    }
}
 
</script>
<style lang="css">


.products__main {
    background-color: rgba(139, 69, 19, 0.3);
    flex-direction: column;
}

.products__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
}
.product-card {
  height: 500px;
  width: 300px;

  img {
    height: 200px;
    object-fit: cover;
  }
}

.product-card__buttons-section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: 10px;
}



</style>