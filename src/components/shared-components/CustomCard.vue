<template>
  <div class="card" style="width: 18rem">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ obj.title ?? obj.name }}</h5>
      <p class="card-text">{{ obj.description }}</p>
    </div>
    <CardListItems :list-items="obj.listItems as any" v-if="obj.listItems" />
    <CardBodyLinksList v-if="obj.listLinks" :list-links="obj.listLinks as any" />

  </div>
</template>

<script setup lang="ts">

import CardListItems from "../card-components/CardListItems.vue";
import type { CustomCardInterface } from "../../interfaces/shared-interfaces/CustomCardInterface";
import CardBodyLinksList from "../card-components/CardBodyLinksList.vue";

defineProps<{ obj: CustomCardInterface }>();
</script>
