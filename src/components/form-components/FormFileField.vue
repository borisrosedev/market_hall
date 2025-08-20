<template>
  <div class="mb-3">
    <label :for="data.id" class="form-label">{{ data.labelContent }}</label>
    <input  name="file" @change="changeHandler" :accept="data.accept ?? 'image/*'" class="form-control" type="file" :id="data.id">
    <div v-if="data.helpId" :id="data.helpId" class="form-text">{{ data.helpContent }}</div>
  </div>
</template>
<script lang="ts" setup>
interface FormFileFieldProps {
        data: {
            accept?: string,
            id: string 
            labelContent: string 
            helpId?: string 
            helpContent?: string

        }
}


// Props and Emits

defineProps<FormFileFieldProps>()
const emit = defineEmits(['on-file-change'])


/**
 * Emit a custom event "on-file-change"
 * @param e Event - Change Event on Input File
 * @returns void
 */
const changeHandler = (e: Event): void => {
  const target = e.target as HTMLInputElement
  if (target?.files && target.files.length > 0) {
    emit('on-file-change', target.files) 
  }
}



</script>