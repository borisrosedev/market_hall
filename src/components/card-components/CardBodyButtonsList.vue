<template>
<div class="card-body">
    <ButtonCard @click="btn.onClick" v-for="(btn,i) in listButtons" :key="i"  />
</div>


</template>
<script setup lang="ts">
import type { CardBodyButtonsListInterface } from '../../interfaces/card-interfaces/CardBodyButtonsListInterface';

defineProps<CardBodyButtonsListInterface>()
</script>