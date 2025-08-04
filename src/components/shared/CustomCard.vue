<template>
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{  obj.title ?? obj.name }}</h5>
            <p class="card-text">{{  obj.description }}</p>
        </div>
        <CardListItems :list-items="obj.listItems" v-if="obj.listItems" />
        <CardBodyLinksList  :list-links="obj.listLinks as any" v-if="obj.listLinks"/>
   </div>

</template>

<script setup lang="ts">

import CardListItems from '../card-components/CardListItems.vue';
import { CustomCardInterface } from "../../interfaces/shared-interfaces/CustomCardInterface"
import CardBodyLinksList from '../card-components/CardBodyLinksList.vue';

defineProps<{ obj: CustomCardInterface  }>()

</script>