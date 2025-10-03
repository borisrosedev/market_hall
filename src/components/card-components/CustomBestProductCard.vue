<template>

    <article class="custom-best-product-card">
        <figure class="custom-best-product-card__figure">
            <button @click="$emit('onLike', { prodId: data.id, userId: userId, context: 'like' })"><img src="/src/assets/icons/heart.svg"></button>
            <img :src="data.src ?? data.url  ?? '/src/assets/icons/products/meuble.svg'" :alt="'Image of ' + (data.name ??  data.title)" />
        </figure>
        <section class="custom-best-product-card__info">
                <header>
                    <h3 class="custom-best-product-card__h3">{{ data.title ?? data.name  }}</h3>
                    <section class="custom-best-product-card__tags-section" v-if="data.tags">
                        <TagBox v-for="(tag,i) in data.tags" :data="{...tag, classNames: 'custom-best-product-card__tag'}" />
                    </section>

                </header>
                <section class="custom-best-product-card__seller-section">
                    <span class="custom-best-product-card__seller">Vendu par {{  data.seller }}</span>
                    <span class="custom-best-product-card__price">{{  data.price_cents }} €</span>
                </section>
                <section class="custom-best-product-card__social-proof" v-if="data.views || data.likes">
                    <CustomIconShortMessageComponent v-if="data.views" :data="{
                        icon: 'eye',
                        ariaLabel: 'Information on the amount of viewers',
                        shortMessage: `${data.views} vues`
                    }" />
                     <CustomIconShortMessageComponent v-if="data.likes" :data="{
                        icon: 'heart_fav',
                        shortMessage: `${data.likes} favoris`,
                        ariaLabel: 'Information on the people who had it to their favorites '
                    }" />
                </section>
                <section class="custom-best-product-card__cta-section">
                    <CustomButtonWithOptionalIcon v-for="(cta, i) of bestProductCallToActions" :key="i" :data="cta" />
                </section>
             

        </section>

    </article>

</template>
<script setup lang="ts">
import { ref } from 'vue'
import TagBox from '../shared-components/TagBox.vue';
import CustomButtonWithOptionalIcon from '../shared-components/CustomButtonWithOptionalIcon.vue';
import CustomIconShortMessageComponent from '../shared-components/CustomIconShortMessageComponent.vue';
const userId = ref(0);
interface CustomBestProductCardProps {
    data: {
        seller: string
        src?: string 
        url?: string
        name?: string 
        title?: string
        likes?: number,
        price_cents: number
        id: string 
        views: number
        tags?: { content:string }[]
    }
}


defineProps<CustomBestProductCardProps>();
defineEmits(['onLike'])


const  bestProductCallToActions = [
       {
        context: 'detail',
        content: 'Voir les détails',
        classNames: 'custom-best-product-card-cta custom-best-product-card-cta--primary',
        ariaLabel: 'the button to show detail'
    },
    {
        context: 'contact',
        content: 'Contacter le veudeur',
        classNames: 'custom-best-product-card-cta custom-best-product-card-cta--secondary',
        ariaLabel: 'the button to contact the seller'
    }
]
</script>

<style lang="scss">

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
 color:  #D4AF37;
 border: solid #D4AF37 1px;

}
</style>