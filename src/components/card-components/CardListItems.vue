<template>
  <ul class="list-group list-group-flush">
    <li v-for="(item, i) in listItems" :key="i" class="list-group-item">
      {{ item.content }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { CardListItemsInterface } from "../../interfaces/card-interfaces/CardListItemsInterface";
defineProps<CardListItemsInterface>();
</script>
