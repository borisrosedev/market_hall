<template>
  <article :class="'mb-3 ' + (obj.classNames ?? '')">
    <label :for="obj.id" class="form-label">{{ obj.labelContent }}</label>
    <input
      v-if="!obj.textarea"
      :data-testid="obj.id"
      :type="obj.type ?? 'text'"
      class="form-control"
      :id="obj.id"
      :aria-describedby="obj.helpId"
      v-on:input="(e) => onInput(e, obj.id)"
    />
    <textarea 
      v-else
      :data-testid="obj.id"
      :placeholder="obj.placeholder" 
      :id="obj.id"
      style="resize:none; height: 200px;"
      class="form-control"
      v-on:input="(e) => onInput(e, obj.id)"
    >
    </textarea>
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

