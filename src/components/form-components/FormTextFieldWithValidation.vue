<template>
  <article :class=" classNames ?? 'col-md-4' ">
        <label :for="data.id" class="form-label">{{ data.labelContent }}</label>
        <div class="input-group has-validation">
            <span v-if="icon" class="input-group-text" :id="'icon of ' + data.id">{{ icon }}</span>
            <input 
                :aria-describedby="icon ? 'icon of ' + data.id : ''" 
                :type="data.type ?? 'text'" 
                :class="'form-control '  + (data.isValid && !data.isInvalid ? 'is-valid' : (data.isInvalid && !data.isValid ? 'is-invalid' : ''))" 
                :id="data.id" 
                @input="onInput"
                required
            >
            <div v-if="data.isValid && !data.isInvalid" class="valid-feedback">
                Looks good
            </div>
            <div v-if="data.isInvalid" class="invalid-feedback">
                Please provide a valid {{ data.id }}
            </div>
        </div>
    </article>

</template>
<script lang="ts" setup>

interface FormTextFieldWithValidationProps {
    classNames?: 'col-md-6' | 'col-md-3' | 'col-12'
    icon?: string
    data: {
        isValid?: boolean | undefined,
        isInvalid?: boolean | undefined,
        id: string
        labelContent: string
        type?: 'email' | 'password'
    }
}

defineProps<FormTextFieldWithValidationProps>()
const emit = defineEmits(['input-change'])

const onInput = (e:any) => {
    emit('input-change',{name: e.target.id , value: e.target.value })
}
</script>