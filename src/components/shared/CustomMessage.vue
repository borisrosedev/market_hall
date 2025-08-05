<template>
  <p
    :class="
      'font-monospace ' +
      (obj.classNames ?? 'text-danger') +
      ' animate__animated ' +
      (obj.animateClassNames ?? 'animate__fadeInUp')
    "
  >
    {{ obj.content }}
  </p>
</template>

<script lang="ts" setup>
import type { CustomMessageInterface } from "../../interfaces/shared-interfaces/CustomMessageInterface";
defineProps<{ obj: CustomMessageInterface }>();
</script>
