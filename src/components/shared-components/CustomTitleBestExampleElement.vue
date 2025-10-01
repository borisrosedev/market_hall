<template>
    <article class="custom-best-title-product-card">
        <section class="custom-best-title-product-card__header">
            <section :class="data.classNames ?? ''">

                <section class="custom-best-title-product-card__button">
                    <section class="custom-best-title-product-card__titre">
                        {{ data.title }}
                    </section>
                    <section class="custom-best-title-product-card__button-container">
                        <section class="custom-best-title-product-card__button__sort">
                            <section class="custom-best-title-product-card__button__sort-border">
                                <img src="/src/assets/icons/filter.svg" />
                                <span>Filtres</span>
                            </section>
                        </section>

                        <section class="custom-best-title-product-card__button__grid">
                            <section class="custom-best-title-product-card__button__grid-border">
                                <img src="/src/assets/icons/grid.svg" alt="grid"
                                    class="custom-best-title-product-card__button__grid-border-grid" />
                                <img src="/src/assets/icons/list.svg" alt="list"
                                    class="custom-best-title-product-card__button__grid-border-list" />
                            </section>

                        </section>
                    </section>
                </section>
            </section>

        </section>
        <span v-html="data.subtitle" v-if="data.hasFilter" :class="data.subtitleClassName ?? ''">
        </span>
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
    background: var(--color-orange-9, #1A1612);
    padding-right: 184.50px;
    display: flex;
    flex-direction: column;
}

.custom-best-title-product-card__header {
    display: flex;
    justify-content: space-between; // Aligne le titre à gauche et les boutons à droite
    align-items: center; // Centre verticalement tout le contenu
    width: 100%;
    padding: 0 16px; // Ajoute un peu d'espace sur les côtés si nécessaire
}

.custom-best-title-product-card__titre {
    justify-content: center;
    display: flex;
    flex-direction: column;
    color: var(--color-grey-95, #F6F3EE);
    font-size: 28.36px;
    font-family: Inter;
    font-weight: 500;
    line-height: 36px;
    word-wrap: break-word;
}

.custom-best-title-product-card__button {
    display: flex;
    align-items: center;
    gap: 516px;
    width: 100%;
}


.custom-best-title-product-card__button-container {
    display: flex;
    // align-items: center;
    gap: 16px;
    width: 100%;
}

.custom-best-title-product-card__button__sort {
    display: flex;
    align-items: center;
    width: auto;
}

.custom-best-title-product-card__button__grid {
    display: flex;
    align-items: center;
    width: auto;
}

.custom-best-title-product-card__button__sort-border {
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
        //object-fit: cover;
        //width: 16px; //100%;
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

.custom-best-title-product-card__button__grid-border {
    height: 32px;
    padding-top: 5.50px;
    padding-bottom: 6.50px;
    padding-left: 11px;
    padding-right: 11px;
    background: var(--color-orange-9, #1A1612);
    border-radius: 10px;
    outline: 1px var(--color-yellow-52-30p, rgba(212, 175, 55, 0.30)) solid;
    outline-offset: -1px;
    //justify-content: center;
    //align-items: center;
    gap: 2px;
    display: flex;

    align-self: stretch;
    justify-content: space-between;
    align-items: center;
    display: inline-flex;

    img {
        object-fit: cover;
        width: 16px; //100%;
        height: 16px; //100%; 
    }


}

.custom-best-title-product-card__button__grid-border-grid {

    //height: 32px;
    //padding-left: 10px;
    //padding-right: 10px;
    background: var(--color-yellow-52, #D4AF37);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    justify-content: center;
    align-items: center;
    display: flex;

}

.custom-best-title-product-card__button__grid-border-list {
    //background: green;
    height: 32px;
    // padding-left: 10px;
    // padding-right: 10px;
    //  border-top-right-radius: 10px;
    // border-bottom-right-radius: 10px;
    justify-content: center;
    align-items: center;
    display: flex;
}
</style>