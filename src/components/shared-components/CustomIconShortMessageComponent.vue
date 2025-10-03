
<template>

    <article :class="data.classNames ?? ''">
        <img :src="`/src/assets/icons/${data.icon}.svg`" :alt="'Image of ' + data.icon +  ' icon'">
        <span :aria-label="data.ariaLabel">{{ data.shortMessage }}</span>
    </article>


</template>




<script setup lang="ts">

interface CustomIconShortMessageComponentProps {
    data: {
        icon: any
        shortMessage: string
        classNames?: string
        ariaLabel: string
    }
}

defineProps<CustomIconShortMessageComponentProps>();

</script>