<template>
    <h1 :class="data.classNames ?? ''">
        {{  data.startTitle }}<span  v-html="data.emphasizedElement" v-if="data.hasEmphasis" :class="data.emphasisClassNames ?? ''">
        </span> {{ data.endTitle ?  data.endTitle : '' }}
    </h1>
</template>
<script setup lang="ts">

interface CustomTitleWithOptionalEmphasizedElementProps {
    data: {
    classNames?: string
    startTitle: string 
    endTitle?: string
    hasEmphasis: boolean
    emphasizedElement: string
    emphasisClassNames?: string }
}

defineProps<CustomTitleWithOptionalEmphasizedElementProps>()
</script>
