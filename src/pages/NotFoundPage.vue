<template>
    <main class="app__main not-found__main">
        <section class="row justify-content-center w-100">
            <CustomHeaderBodyCard
                :obj="obj"
            >
                <RouterLink style="color:black" to="/">Back Home</RouterLink>
            </CustomHeaderBodyCard>
        </section>
    </main>
</template>

<script setup lang="ts">
import CustomHeaderBodyCard from '../components/shared-components/CustomHeaderBodyCard.vue';
import type { CustomHeaderBodyCardInterface } from '../interfaces/shared-interfaces/CustomHeaderBodyCardInterface';

const obj: CustomHeaderBodyCardInterface = {
    classNames: 'text-bg-danger col-12 col-md-6 col-xl-3 col-sm-8 animate__animated animate__flipInX',
    bodyTitle: "Not Found",
    bodyText: "The page you are trying to access does not exist",
    headerContent: "404"
}

</script>
<style lang="css">



.not-found__main {
    background-color: rgba(139, 69, 19, 0.3);
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

</style>