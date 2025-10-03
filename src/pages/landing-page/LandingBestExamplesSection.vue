<template>
    <section class="landing__best-examples-section">
        <section class="landing_best-examples-header">
            <CustomTitleBestExampleElement :data="titleComponentData" />
        </section>
        <section class="landing_best-examples-category"> 
            <CustomCardCategoryBestProduct :category="listCategoryComponentData" />
        </section>
        <section class="landing_best-examples-grid-container">
            <section class="landing_best-examples-grid">
                <CardGridBestProduct :grid="gridComponentDataLine1Col1" />
                <CardGridBestProduct :grid="gridComponentDataLine1Col2" />
                <CardGridBestProduct :grid="gridComponentDataLine1Col3" />
                <CardGridBestProduct :grid="gridComponentDataLine2Col1" />
                <CardGridBestProduct :grid="gridComponentDataLine2Col2" />
                <CardGridBestProduct :grid="gridComponentDataLine2Col3" />
            </section>
        </section>
    </section>
</template>

<script setup lang="ts">
import CustomTitleBestExampleElement from "../../components/shared-components/CustomTitleBestExampleElement.vue"
import CardGridBestProduct from "../../components/card-components/CardGridBestProduct.vue"
import CustomCardCategoryBestProduct from "../../components/shared-components/CustomCardCategoryBestProduct.vue"

const titleComponentData = {
    title: "Marketplace",
    className: "best-examples__title-color",
    subtitle: "Découvrez notre sélection d'antiquités authentifiées",
    subtitleClassName: "best-examples__subtitle-color",
    hasFilter: true
}


const listCategoryComponentData = {
  
    
     tags: [
        
        {
            content: 'Mobilier',
            className : 'mobilier_span' 
            
        }, {
            content: 'Art Décoratif',
            className : 'mobilier_span'
        }, {
            content: 'Horlogerie',
            className : 'mobilier_span'
        }, {
            content: 'Peinture',
            className : 'mobilier_span'
        }, {
            content: 'Luminaires',
            className : 'mobilier_span'
        }
        , {
            content: 'Bijoux',
            className : 'mobilier_span'
        }
    ]
}

const gridComponentDataLine1Col1 = {
    className: "background-border-shadow-line1-col1"
}

const gridComponentDataLine1Col2 = {
    className: "background-border-shadow-line1-col2"
}

const gridComponentDataLine1Col3 = {
    className: "background-border-shadow-line1-col3"
}

const gridComponentDataLine2Col1 = {
    className: "background-border-shadow-line2-col1"
}

const gridComponentDataLine2Col2 = {
    className: "background-border-shadow-line2-col2"
}

const gridComponentDataLine2Col3 = {
    className: "background-border-shadow-line2-col3"
}


</script>
<style lang="scss">
.landing_best-examples-category {
   
   display: flex;
  align-items: flex-start; /* Alignement vertical en haut */
  justify-content: flex-start; /* Alignement horizontal à gauche */
  gap: 10px; /* Espacement entre les div (optionnel) */
//  border: 1px solid #ccc; /* Pour visualiser le conteneur */
}

.landing_best-examples-grid-container {
    width: 100%;
    max-width: 1536px;
    padding-left: 16px;
    padding-right: 16px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
    display: flex;
}

.landing_best-examples-grid {
    align-self: stretch;
    height: 1282.69px;
    position: relative;

}

.landing__best-examples-section {
    
    background-color: #1c1710;
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
gap:32px;
    align-items: center;
}


.landing_best-examples-header {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.best-examples__title-color {
    color: var(--color-grey-95, #F6F3EE);
    font-size: 28.36px;
    font-family: Inter;
    font-weight: 500;
    line-height: 36px;
    word-wrap: break-word;
    margin: 0;

}

.best-examples__subtitle-color {

    justify-content: center;
    display: flex;
    flex-direction: column;

    color: var(--color-orange-68, #C4B895);
    font-size: 14.75px;
    font-family: Inter;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word;

}

.carousel {
    align-self: stretch;
    height: 620px;
    position: relative;
}


.carousel__view {
    width: 880px;
    left: 8px;
    top: 88px;
    position: absolute;
    justify-content: center;
    align-items: center;
    gap: 32px;
    display: inline-flex;
}

.carousel__image {
    width: 424px;
    padding: 1px;
    position: relative;
    background: var(--color-orange-20, #3A342E);
    box-shadow: 0px 1px 0px rgba(212, 175, 55, 0.10);
    overflow: hidden;
    border-radius: 12px;
    outline: 1px var(--color-yellow-52-30p, rgba(212, 175, 55, 0.30)) solid;
    outline-offset: -1px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
}
</style>
