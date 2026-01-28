<template>

 <article class="card" style="width: 18rem;">
  <img 
    v-if="obj.src ?? obj.url ?? obj.photo_name " 
    :src="obj.src ?? obj.url ?? 'http://localhost:5000/static/files/'+ obj.photo_name" 
    class="card-img-top" 
    :alt="'Image of ' + (obj.name ?? obj.alt ?? obj.title ?? obj.fullname)"
  >
  <div :class="'card-body ' + (obj.bodyClassNames ?? '')">
    <p :class="'card-text ' + (obj.bodyTitleClassNames ?? '')">
      <span v-if="obj.role" :class="'badge ' + getBadge(obj.role)">{{ obj.role }}</span>
<!--       
      <span v-mix="{fw: 'bold'}" :class="obj.role ? 'mx-2' : ''" >{{ obj.title ?? obj.name ?? obj.fullname }}</span> -->
      <span class="fw-bold" :class="obj.role ? 'mx-2' : ''" >{{ obj.title ?? obj.name ?? obj.fullname }}</span>
    </p>
    <p v-if="obj.price_cents || obj.description" :class="'card-text ' + (obj.bodyPriceCentsClassNames ?? obj.bodyDescriptionClassNames ?? '')">{{ " "  + obj.price_cents ? obj.price_cents + ' €' : obj.description  }}</p>
  </div>

  <slot />

</article>
   

</template>
<script setup lang="ts">


import type { CustomCardInterface } from "../../interfaces/shared-interfaces/CustomCardInterface";

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
