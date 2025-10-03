<template>
    <span :class="data.classNames ?? 'tag-box'">{{  data.content }}</span>
</template>
<script setup lang="ts">

interface TagBoxProps {
    data: {
        classNames?: string 
        content: string 
    }
}

defineProps<TagBoxProps>()

</script>

<style lang="scss">

.tag-box {
    font-size: 11px;
    border: solid red 2px;
}

</style>