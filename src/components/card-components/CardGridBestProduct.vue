<template>
    <RouterLink :to="`/product-detail/${grid.gridId}`">
        <div v-if="productsGetterLimited?.length > 0">

            <section :class="grid.className ?? ''" class="cards-grid-border-marketplace">

                <figure :class="grid.className ?? ''" class="cards-grid-marketplace-img">
                    <!--Utilise 'currentProduct' au lieu d'accéder directement au tableau -->
                    <img 
                        v-if="currentProduct"
                        :src="'http://localhost:5000/static/files/' + currentProduct.photo_name"
                        :alt="currentProduct.name" 
                        class="marketplace-picture">
                    <div class="cards-grid-marketplace-label-card">
                        <span class="cards-grid-marketplace-label-card-span">Label</span>
                    </div>
                </figure>

                <section class="cards-grid-marketplace-description">
                    <section class="cards-grid-marketplace-product-name" v-if="currentProduct">
                        <span class="cards-grid-marketplace-product-name-span">
                            {{ currentProduct.name }} : {{ currentProduct.description }}
                        </span>
                    </section>
                    <section class="cards-grid-marketplace-product-seller">
                        <span class="cards-grid-marketplace-product-seller-span">
                            Antiquités Martin • Paris
                        </span>
                    </section>

                    <section class="cards-grid-marketplace-product-price" v-if="currentProduct">
                        <span class="cards-grid-marketplace-product-price-span">
                            {{ divideBy100(currentProduct.price_cents) }} €
                        </span>
                        <div class="cards-grid-marketplace-product-price-spacing"></div>

                        <img src="/src/assets/icons/eye.svg" alt="eye"
                            class="cards-grid-marketplace-product-see-icon" />
                        <span class="cards-grid-marketplace-product-see-span">45</span>
                        <section class="cards-grid-marketplace-product-nb-vue"></section>
                    </section>
                </section>
            </section>

        </div>
        <div v-else :class="grid.className ?? ''"
            class="cards-grid-border-marketplace cards-grid-border-marketplace-empty">
            <img src="/src/assets/icons/camera-off-line.svg" alt="camera-off-line" class="cards-grid-marketplace-img" />
        </div>

    </RouterLink>

</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useProductsStore } from "../../stores/products-store"
import { storeToRefs } from "pinia"

// difinir l'interface du produit
interface Product {
    id?: number | BigInteger
    name: string
    description: string
    photo_name: string
    price_cents: string | number
}

interface CardGridBestProductProps {
    grid: {
        name?: string
        gridId: BigInteger | number // ajouter un type de pour qu'il soit compatible avec 
        photo_name?: string
        className: string
    }
}

const productsStore = useProductsStore()
const { getProductByNb } = productsStore
const { productsGetterLimited } = storeToRefs(productsStore)

// Créer une computed property typée
// Cela remplace les accès répétés à productsGetterLimited[Number(grid.gridId)]
const currentProduct = computed<Product | null>(() => {
    const productIndex = Number(props.grid.gridId)
    const product = productsGetterLimited?.value?.[productIndex]
    
    // Vérifier que le produit existe avant de le retourner
    if (product) {
        return product as Product
    }
    return null
})

// References
const carouselWrapper = ref<HTMLElement>()
const carouselTrack = ref<HTMLElement>()

// State
const currentSlide = ref(0)
const slideWidth = ref(0)

const gridLine1Col1 = 0

let autoPlayInterval: NodeJS.Timeout | null = null
let tl: gsap.core.Timeline

const calculateSlideWidth = () => {
    if (carouselWrapper.value) {
        slideWidth.value = carouselWrapper.value.offsetWidth
    }
}

// Typer le paramètre de cette fonction
function divideBy100(montantString: string | number): string {
    const montant = parseFloat(String(montantString))
    if (isNaN(montant)) {
        return 'Erreur'
    }
    return String(montant / 100)
}

const bestProductCallToActions = [
    {
        context: 'detail',
        content: 'Voir les détails',
        classNames: 'custom-best-product-card-cta custom-best-product-card-cta--primary',
        ariaLabel: 'the button to show detail'
    },
    {
        context: 'contact',
        content: 'Contacter le vendeur',
        classNames: 'custom-best-product-card-cta custom-best-product-card-cta--secondary',
        ariaLabel: 'the button to contact the seller'
    }
]

const userId = ref(0)
const props = defineProps<CardGridBestProductProps>()

onMounted(async () => {
    await getProductByNb(5)
})

</script>


<style lang="scss">
.no-underline {
    text-decoration: none;
    color: inherit;
}

.custom-best-product-card {
    display: flex;

}

.custom-best-product-card__price {
    font-size: 25px;
    font-weight: 400;
}

.custom-best-product-card__seller-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #d3bf80;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    margin-block: 10px;
}

.custom-best-product-card__social-proof {
    display: flex;
    color: #d3bf80;

    article {
        margin-inline-end: 10px;
        margin-block: 10px;
        display: flex;
        align-items: center;

        span {
            margin-inline-start: 10px;
        }
    }

}


.custom-best-product-card__cta-section {
    display: flex;
    margin-block: 10px;
}

.custom-best-product-card__h3 {
    font-size: 18px;
    text-align: center;
    color: #ffffff;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
}

.custom-best-product-card__figure {
    position: relative;
    display: flex;
    width: 40%;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    button {
        position: absolute;
        margin: 0;
        padding: 0;
        border: none;
        border-radius: 10px;
        right: 10px;
        top: 10px;
        z-index: 10;
    }
}


.custom-best-product-card__info {
    display: flex;
    padding: 20px;
    flex-direction: column;
    width: 60%;

}

.custom-best-product-card__tag {
    background-color: #403327;
    color: #D4AF37;
    border-radius: 20px;
    font-size: 11px;
    padding-inline: 10px;
    padding-block: 4px;
}



.custom-best-product-card-cta {
    border-radius: 10px;
    padding-inline: 35px;
    padding-block: 10px;
    font-size: 12px;
    margin-inline-end: 10px;
    border: none;
    display: flex;
    align-items: center;
}

.custom-best-product-card-cta--primary {
    background-color: #D4AF37;
    color: #271f17;

    img {
        margin-inline-start: 5px;
    }
}

.custom-best-product-card-cta--secondary {
    background-color: #403327;
    color: #D4AF37;
    border: solid #D4AF37 1px;

}


.cards-grid-border-marketplace {
    height: 627.34px;
    width: 30% ;//485.33px;
    padding-top: 1px;
    padding-bottom: 25.01px;
    padding-left: 1px;
    padding-right: 1px;
    position: absolute;
    background: var(--color-orange-14, #2A241E);
    box-shadow: 0px 4px 20px rgba(212, 175, 55, 0.15);
    overflow: hidden;
    border-radius: 16px;
 //   outline: 1px var(--color-yellow-52-30p, rgba(212, 175, 55, 0.30)) solid;
    outline-offset: -1px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;

}

.background-border-shadow-line1-col1 {

    left: 0px;
    top: 0px;
}


.background-border-shadow-line1-col2 {
    left : 35%;  //  left: 509.33px;
    top: 0px;

}

.background-border-shadow-line1-col3 {

    left : 70%;  // left: 1018.66px;
    top: 0px;

}

.background-border-shadow-line2-col1 {
    left: 0px;
    top: 653.34px;
}

.background-border-shadow-line2-col2 {
    left : 35%;  //left: 509.33px;
    top: 653.34px;
}

.background-border-shadow-line2-col3 {
    left : 70%;  //left: 1018.66px;
    top: 653.34px;
}


.cards-grid-border-contener {
    width: 483.33px;
    height: 627.34px;
    left: 1px;
    top: 1px;
    position: absolute;
    background: linear-gradient(128deg, var(--color-yellow-52-2p, rgba(212, 175, 55, 0.02)) 0%, var(--color-yellow-52-0p, rgba(212, 175, 55, 0)) 50%, var(--color-orange-44-2p, rgba(139, 115, 85, 0.02)) 100%);
}

.cards-grid-border-contener-image {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
}

.cards-grid-border-contener-image-background {
    align-self: stretch;
    position: relative;
    background: var(--color-orange-20, #3A342E);
    overflow: hidden;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
}


.cards-grid-border-contener-image-detail {
    align-self: stretch;
    padding: 16px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
}

.cards-grid-marketplace-label-card {
    left: 12px;
    top: 447.33px;
    position: absolute;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    background: var(--color-yellow-52, #D4AF37);
    border-radius: 4px;
    align-items: flex-start;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.cards-grid-marketplace-label-card-span {
    color: var(--color-orange-9, #1A1612);
    font-size: 10.50px;
    font-family: Inter;
    font-weight: 400;
    line-height: 16px;
    word-wrap: break-word;
}

.cards-grid-marketplace-description {
    align-self: stretch;
    padding: 16px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
}

.cards-grid-marketplace-product-name {
    overflow: hidden;
    align-items: flex-start;

    align-self: stretch;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.cards-grid-marketplace-product-name-span {

    color: var(--color-grey-95, #F6F3EE);
    font-size: 15px;
    font-family: Inter;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word;
}

.cards-grid-marketplace-product-seller-span {
    align-items: flex-start;
    align-self: stretch;
    justify-content: center;
    display: flex;
    flex-direction: column;
    color: var(--color-orange-68, #C4B895);
    font-size: 12.91px;
    font-family: Inter;
    font-weight: 400;
    line-height: 20px;
    word-wrap: break-word;
}

.cards-grid-marketplace-product-price {

    align-items: center;
    gap: 4px;
    display: flex;
    justify-content: space-between;
}

.cards-grid-marketplace-product-price-span {
    color: var(--color-yellow-52, #D4AF37);
    font-size: 18.28px;
    font-family: Inter;
    font-weight: 400;
    line-height: 28px;
    word-wrap: break-word;
}

.cards-grid-marketplace-product-see-span {
    align-items: center;
    gap: 4px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    color: var(--color-orange-68, #C4B895);
    font-size: 10.50px;
    font-family: Inter;
    font-weight: 400;
    line-height: 16px;
    word-wrap: break-word;
}


.cards-grid-marketplace-product-see-icon {
    width: 16px;
    height: 20px;
    align-self: stretch;
    padding-top: 1.50px;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    display: flex;
}

.cards-grid-marketplace-product-nb-vue {
    align-items: left;
}

.cards-grid-marketplace-product-price-spacing {
    width: 320px;
    height: 12px;
    position: relative;
}

.marketplace-picture {
    width: 100%;
    height: 483px;
    max-width: 483px;
    position: relative;
    background-color: white;
}
</style>