<template>

  <article class="mb-3">
    <label :for="obj.id" class="form-label">{{  obj.labelContent }}</label>
    <input 
        :type="obj.type ?? 'text'" 
        class="form-control" 
        :id="obj.id" 
        :aria-describedby="obj.helpId"
        v-on:input="(e) => onInput(e, obj.id)"
    />
    <div :id="obj.helpId" class="form-text">{{ obj.helpContent }}</div>
  </article>


</template>

<script lang="ts" setup>
import { FormTextFieldInterface } from "../interfaces/FormTextFieldInterface"

defineProps<{ obj: FormTexFieldInterface }>()
const emit = defineEmits(["onInputUpdated"])



const onInput = (event, name) => {
  emit("onInputUpdated", { value: event.target.value, name: name});
}

</script>