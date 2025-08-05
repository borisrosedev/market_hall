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

const products = ref([])

onMounted(() => {
    products.value = PRODUCTS as any
})


const onAddToCart = (e, id: number) => {
    alert(id)
}
 
</script>
<style lang="css">


.products__main {
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