<template>

    <article :class="'card ' + (obj.classNames ?? '')">
      <img v-if="obj.url || obj.photo_name" :src="obj.url ?? ('http://localhost:5000/static/files/' + obj.photo_name) ?? ''" class="card-img-top" :alt="'Image of ' + (obj.title ?? obj.name)" />
      <div class="card-body">
        <h5 class="card-title">{{ obj.title ?? obj.name }}</h5>
        <p v-if="obj.description" class="card-text">{{ obj.description }}</p>
        <span v-if="obj.role" :class="'badge ' + (obj.roleClassNames ?? getBadge(obj.role)) + ' card-text'">{{ obj.role }}</span>
      </div>
    
      <CardListItems :list-items="obj.listItems" v-if="obj.listItems" />
      <CardBodyLinksList v-if="obj.listLinks" :list-links="obj.listLinks as any" />
      <CardBodyButtonsList v-if="obj.listButtons" :list-buttons="obj.listButtons as any"  />
      <slot />

    </article>

</template>
<script setup lang="ts">

import CardBodyButtonsList from "../card-components/CardBodyButtonsList.vue";
import CardListItems from "../card-components/CardListItems.vue";
import type { CustomCardInterface } from "../../interfaces/shared-interfaces/CustomCardInterface";
import CardBodyLinksList from "../card-components/CardBodyLinksList.vue";

defineProps<{ obj: CustomCardInterface }>();


const getBadge = (role: string) => {
    switch (role) {
      case 'admin':
        return 'text-bg-danger';
      case 'premium':
        return 'text-bg-warning';
      case 'user':
        return 'text-bg-info';
      default:
        return 'text-bg-primary';
    }
  }

</script>
