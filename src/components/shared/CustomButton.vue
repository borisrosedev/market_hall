<template>
  <button
    :class="'btn ' + (obj.classNames ?? 'btn-light')"
    :id="obj.id ?? ''"
    :type="obj.type ?? 'button'"
  >
    {{ obj.content }}
  </button>
</template>

<script setup lang="ts">
import type {
  CustomButtonInterface,
  CustomButtonHandlerType,
} from "../../interfaces/shared-interfaces/CustomButtonInterface";
defineProps<{
  obj: CustomButtonInterface & CustomButtonHandlerType;
  key: number;
}>();
</script>
