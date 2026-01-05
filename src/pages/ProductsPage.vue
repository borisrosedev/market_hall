<template>
    <main class="app__main products__main">

        <section class="products__list">

            <CustomCard v-if="productsGetter && productsGetter.length > 0" v-for="(prod, i) in productsGetter as any"
                :obj="{
                    ...prod,
                    classNames: 'product-card my-3',
                    bodyClassNames: 'd-flex flex-column',
                    bodyTitleClassNames: 'align-self-center',
                    bodyPriceCentsClassNames: 'align-self-center text-secondary'
                }" :key="i">
                <section class="product-card__buttons-section">
                    <CustomButton @click="(e : any) => onAddToCart(e, prod)" :obj="{
                        content: 'Add to Cart',
                        classNames: 'btn-warning'
                    }" />
                </section>
            </CustomCard>



        </section>
        <div v-if="!productsGetter.length" class="alert alert-info align-self-center" role="alert">
            We are no product to propose you right now. Do come back later
        </div>
    </main>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CustomCard from '../components/shared-components/CustomCard.vue';
import CustomButton from '../components/shared-components/CustomButton.vue';
import { useUserAuth } from "../composables/useUserAuth"
import { useMessagesStore } from "../stores/messages-store"
import { useProductsStore } from "../stores/products-store"
import { useRouter, useRoute } from "vue-router"
import { storeToRefs } from "pinia"
import { addItem, getLastAction, setLastAction } from '../stores/cart-store';
import { currentUser } from '../stores/user-store';

const router = useRouter()
const route = useRoute()
const isConnected = ref(false)
const messagesStore = useMessagesStore()
const productsStore = useProductsStore()
const { showToast, hideToastNow } = messagesStore
const { checkAuth } = useUserAuth()


const { getAllProducts } = productsStore

const { productsGetter , productsGetterLimited } = storeToRefs(productsStore)

onMounted(async () => {
    console.log("route", route)
    await getAllProducts()
    isConnected.value = await checkAuth()
   
})



function navigateHandler(to: string): void {
    router.push(to)
    hideToastNow()
}


const onAddToCart = async (e : any, prod: any) => {
    if (!isConnected.value) {
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


    } else {


        await addItem({ cartId: currentUser.value.cart_id, productId: prod.id, quantity: 1 })

        if (getLastAction.value == "addition") {
            showToast({

                summary: `Addition successfull`,
                detail: `We added ${prod.name} to your cart`,
                type: 'success',
                actions: [{
                    to: 'cart',
                    classNames: 'btn-success',
                    content: 'Check out your cart',
                    handler: navigateHandler
                }]
            })
            setLastAction("none")
        } else if (getLastAction.value == "update") {

            showToast({

                summary: `Update successfull`,
                detail: `We updated the quantity of ${prod.name} in your cart`,
                type: 'success',
                actions: [{
                    to: 'cart',
                    classNames: 'btn-success',
                    content: 'Check out your cart',
                    handler: navigateHandler
                }]
            })
            setLastAction("none")
        } else {
            console.log(getLastAction.value)
            showToast({

                summary: `Operation failure`,
                detail: `An error occurred while trying to add ${prod.name} to your cart`,
                type: 'error'
            })
            setLastAction("none")
        }
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