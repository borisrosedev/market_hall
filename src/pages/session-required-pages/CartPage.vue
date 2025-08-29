<template>
    <main class="app__main cart__main px-3">   
        <table class="table" v-if="getCart && getCart.items && getCart.items.length">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Add/Remove</th>
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
                        <span>{{ item.quantity }}</span>
                      
                    </td>
                    <td>
                    
                            <button class="btn btn-warning mx-2" @click="() => onUpdateCart('add',item)">
                                <i style="font-size: 18px;" class="bi bi-plus-square-fill"></i>
                            </button>
                              <button class="btn btn-warning mx-2" @click="() => onUpdateCart('remove',item)">
                                 <i  style="font-size: 18px;" class="bi bi-dash-square-fill"></i>
                            </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <section class="d-flex flex-row-reverse" v-if="getCart?.items?.length">
            <button class="btn btn-success mx-4" @click="">Order</button>
            <button class="btn btn-danger" @click="">Empty the cart</button>
        </section>
        <div  v-if="!getCart.items || !getCart.items.length" class="d-flex mx-2 flex-column alert alert-info align-self-center" role="alert">
            <span class="my-2">Your cart is empty</span>
            <RouterLink class="btn  btn-info" to="products">Check out our products</RouterLink>
        </div>
    

    </main>

</template>
<script setup lang="ts">

import { onMounted, ref } from "vue";
import { getCart, getUserCart, updateItem } from "../../stores/cart-store"
import { RouterLink } from "vue-router";
const editCart = ref<boolean>(false)

onMounted(async() => {
    await getUserCart()
})


function onUpdateCart (action: 'add'| 'remove', item: any) {
    if(action == 'add') {
        updateItem({ cartId: getCart.value.id, productId: item.product_id, quantity: 1})
    } else {
        updateItem({ cartId: getCart.value.id, productId: item.product_id, quantity: -1})
    }

}

</script>
<style lang="css">

.cart__main {
    flex-direction: column;
}

.cart__figure {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
}

</style>