<template>
    <main class="app__main cart__main px-3">   
        <table class="table" v-if="getCart && getCart.items && getCart.items.length">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                </tr>
            </thead>
            <tbody>
                 <tr v-for="(item, i) in getCart.items" :key="i">

                    <td class="d-flex align-items-center justify-center">
                        <figure class="cart__figure">
                            <img 
                            :src="'http://localhost:5000/static/files/'+item.photo_name" :alt="'image of' + item.name" />
                        </figure>

                    </td>
                    <td>{{ item.name }}</td>
                    <td>  
                        <input v-if="editCart" :placeholder="item.quantity" />
                        <span v-else>{{ item.quantity }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div  v-if="!getCart.items || !getCart.items.length" class="d-flex mx-2 flex-column alert alert-info align-self-center" role="alert">
            <span class="my-2">Your cart is empty</span>
            <RouterLink class="btn  btn-info" to="products">Check out our products</RouterLink>
        </div>
        <div :class="'d-flex mx-2 flex-column alert align-self-start '+ (!editCart ? 'alert-info' : 'alert-danger')" role="alert">
            <span class="my-2">{{ editCart ? 'You can cancel the update at any time' : 'Do not hesitate to update your cart'}}</span>
            <button :class="'btn ' + (!editCart ? 'btn-info' : 'btn-danger')" to="products" @click="onUpdateCart">{{ editCart ? 'Cancel' :'Update your cart'}}</button>
        </div>

    </main>

</template>
<script setup lang="ts">

import { onMounted, ref } from "vue";
import { getCart, getUserCart } from "../../stores/cart-store"
import { RouterLink } from "vue-router";
const editCart = ref<boolean>(false)

onMounted(async() => {
    await getUserCart()
})


function onUpdateCart () {
    editCart.value = !editCart.value
}

</script>
<style lang="css">

.cart__main {
    flex-direction: column;
}

.cart__figure {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    overflow: hidden;
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
}

</style>