<template>
    <article class="custom-best-title-product-card">
        <section class="custom-best-title-product-card__titre">
            <section :class="data.classNames ?? ''">
                {{ data.title }}<span v-html="data.subtitle" v-if="data.hasFilter"
                    :class="data.subtitleClassName ?? ''">
                </span>
                <section class="custom-best-title-product-card__button__sort"> 
            <section class="custom-best-title-product-card__button-border"> 
                <img src="/src/assets/icons/filter.svg" />  
                <span>Filtres</span> 
            </section> 
        </section>
            </section>
        </section>
        
    </article>
</template>
<script setup lang="ts">
import { ref } from 'vue'
interface CustomTitleBestExampleElementProps {
    data: {
        title: string
        subtitle: string
        classNames?: string
        subtitleClassName?: string
        hasFilter: boolean
    }
}

defineProps<CustomTitleBestExampleElementProps>()
</script>

<style lang="scss">
.custom-best-title-product-card {
    display: flex;
    align-self: stretch;
    padding-left: 184.50px;
    padding-right: 184.50px;
    padding-top: 64px;
    padding-bottom: 64px;
    background: var(--color-orange-9, #1A1612);
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.custom-best-title-product-card__button__sort {
    width: 100%;
    max-width: 1536px;
    padding-left: 16px;
    padding-right: 16px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
    display: flex;
    width: 16px;
    flex: 1 1 0;
    position: relative;


}



.custom-best-title-product-card__button-border {
    height: 32px;
    padding-top: 5.50px;
    padding-bottom: 6.50px;
    padding-left: 11px;
    padding-right: 11px;
    background: var(--color-orange-9, #1A1612);
    border-radius: 10px;
    outline: 1px var(--color-yellow-52-30p, rgba(212, 175, 55, 0.30)) solid;
    outline-offset: -1px;
    justify-content: center;
    align-items: center;
    gap: 2px;
    display: flex;

    img {
        object-fit: cover;
        width: 16px; //100%;
        height: 16px; //100%;



    }

    span {
        color: var(--color-grey-95, #F6F3EE);
        font-size: 12.91px;
        font-family: Inter;
        font-weight: 500;
        line-height: 20px;
        word-wrap: break-word;
    }
}

</style>