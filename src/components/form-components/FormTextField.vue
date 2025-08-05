<template>
  <article :class="'mb-3 ' + (obj.classNames ?? '')">
    <label :for="obj.id" class="form-label">{{ obj.labelContent }}</label>
    <input
      :data-testid="obj.id"
      :type="obj.type ?? 'text'"
      class="form-control"
      :id="obj.id"
      :aria-describedby="obj.helpId"
      v-on:input="(e) => onInput(e, obj.id)"
    />
    <div v-if="obj.helpId" :id="obj.helpId" class="form-text">{{ obj.helpContent }}</div>
  </article>
</template>

<script lang="ts" setup>
import type { FormTextFieldInterface } from "../../interfaces/form-interfaces/FomTextFieldInterface";

defineProps<{ obj: FormTextFieldInterface }>();
const emit = defineEmits(["onInputUpdated"]);

const onInput = (event, name) => {
  emit("onInputUpdated", { value: event.target.value, name: name });
};
</script>
