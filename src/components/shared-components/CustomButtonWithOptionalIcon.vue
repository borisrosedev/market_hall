<template>
    <button :class="data.classNames ?? ''" type="button" @click="$emit('onClicked', { context: data.context, isClicked: true })">
       <span v-if="data.icon" :aria-label="data.ariaLabel">{{  data.content }}</span><img v-if="data.icon" :src="`/src/assets/icons/${data.icon}.svg`"  :alt="'image of ' + data.context +  ' icon'" />
        {{ !data.icon ? data.content  : ''}}
    </button>
</template>
<script setup lang="ts">


interface CustomButtonWithOptionalIconProps {
    data: {
        icon?: string 
        content: string
        context: string 
        ariaLabel: string
        classNames?: string
    }
}

defineProps<CustomButtonWithOptionalIconProps>();
defineEmits(['onClicked'])






</script>