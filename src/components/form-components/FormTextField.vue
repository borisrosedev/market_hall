<template>
  <article :class="'mb-3 ' + (obj.classNames ?? '')">
    <label :for="obj.id" class="form-label">{{ obj.labelContent }}</label>
    <input
      v-if="!obj.textarea"
      :data-testid="obj.id"
      :name="obj.id"
      :type="obj.type ?? 'text'"
      class="form-control"
      :id="obj.id"
      :aria-describedby="obj.helpId"
      @input="(e) => onInput(e as Event, obj.id)"
    />
    <textarea 
      v-else
      :data-testid="obj.id"
      :placeholder="obj.placeholder"
      :name="obj.id"
      :id="obj.id"
      style="resize:none; height: 200px;"
      class="form-control"
      @input="(e) => onInput(e as Event, obj.id)"
    >
    </textarea>
    <div v-if="obj.helpId" :id="obj.helpId" class="form-text">{{ obj.helpContent }}</div>
  </article>
</template>

<script lang="ts" setup>
import type { FormTextFieldInterface } from "../../interfaces/form-interfaces/FomTextFieldInterface";

defineProps<{ obj: FormTextFieldInterface }>();
const emit = defineEmits<{
  onInputUpdated: [payload: { value: string; name: string }]
}>();


const onInput = (event: Event, fieldName: string) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement;
  
  // mettre l'événement parent avec le contenu mis à jour
  emit("onInputUpdated", { value: target.value, name: fieldName });
};
</script>