<template>

    <main class="app__main order__main px-2">
        <h1 class="">Order Form</h1>
        <div 
            class="progress" 
            role="progressbar" 
            aria-label="order progress bar" 
            :aria-valuenow="getOrderProgress + '%'" 
            aria-valuemin="0" 
            aria-valuemax="100"
        >
            <div class="progress-bar progress-bar-striped bg-success" :style="{width: getOrderProgress + '%'}"></div>
        </div>
        <RouterView></RouterView>
    </main>
</template>
<script lang="ts" setup>

import { onMounted, watch } from "vue";
import { useOrderService } from "../../composables/useOrderService"


const { getOrderProgress } = useOrderService()

onMounted(() => {
    console.log('getOrderProgress', getOrderProgress.value)
})

watch(getOrderProgress, (val) => {
    console.log('on change', getOrderProgress.value)
})


</script>
<style lang="css">

.order__main {
    flex-direction: column;
}


</style>
