<template>
<div class="card-body">
    <a 
        v-for="(item,i) in listLinks" 
        :href="item.href" 
        class="card-link"
    >{{  item.content }}</a> 
</div>


</template>
<script setup lang="ts">
import type { CardBodyLinksListInterface } from '../../interfaces/card-interfaces/CardBodyLinksListInterface';

defineProps<CardBodyLinksListInterface>()
</script>