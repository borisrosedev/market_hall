<template>
    <section class="landing__best-examples-section">
        <section class="landing_best-examples-header">
            <CustomTitleBestExampleElement :data="titleComponentData" />

        </section>

    </section>
</template>

<script setup lang="ts">
import CustomTitleBestExampleElement from "../../components/shared-components/CustomTitleBestExampleElement.vue"

const titleComponentData = {
    title: "Marketplace",
    classNames: "best-examples__title-color",
    subtitle: "Découvrez notre sélection d'antiquités authentifiées",
    subtitleClassName: "best-examples__subtitle-color",
    hasFilter: true
}
</script>
<style lang="scss">
.landing__best-examples-section {
    background-color: #1c1710;
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;

    align-items: center;
}


.landing_best-examples-header {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.best-examples__title-color {
    
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
</style>
