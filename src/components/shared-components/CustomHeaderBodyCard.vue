<template>
<div :class="'card ' + (  obj.classNames ?? 'text-bg-danger')  + ' mb-3'">
  <div class="card-header">{{ obj.headerContent }}</div>
  <div class="card-body">
    <h5 class="card-title">{{  obj.bodyTitle }}</h5>
    <p class="card-text">{{ obj.bodyText }}</p>
    <slot />
  </div>
</div>


</template>

<script setup lang="ts">
import type { CustomHeaderBodyCardInterface } from "../../interfaces/shared-interfaces/CustomHeaderBodyCardInterface";

defineProps<{obj: CustomHeaderBodyCardInterface }>()

</script>
