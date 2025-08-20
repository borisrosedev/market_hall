<template>

    <div class="modal" tabindex="-1" :id="modalId">
        <form :id="formId" v-if="isModalForm" class="modal-dialog" :enctype="hasSelectedFile ? 'multipart-form/data' : ''" @submit.prevent="submitHandler">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{  title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">    
                    <FormTextField v-for="(field,i) in fields" :obj="field" @on-input-updated="onChange"/>
                    <FormFileField v-if="fileField" :data="fileField" @on-file-change="onChange" />
                </div>
                <div class="modal-footer">
                    <button type="reset"  class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                </div>
            </div>
        </form>
    </div>

</template>

<script setup lang="ts">
import FormTextField from "../../components/form-components/FormTextField.vue"
import FormFileField from "../../components/form-components/FormFileField.vue"
import { reactive, ref } from "vue"
import { returnFileSize } from "../../utils/file-utils"
import { useMessagesStore } from "../../stores/messages-store"
import { useFormService } from "../../composables/useFormService"
const formFieldValues = reactive({}) as any
const hasSelectedFile = ref(false)
const {toJson, toMultipart } = useFormService()

const { showToast } = useMessagesStore()


interface CustomModalProps {
    modalId: string
    title: string
    context:string
    isModalForm: boolean
    fileField?: any
    formId?: string
    fields: any[]
    
}

const props = defineProps<CustomModalProps>()

const emit = defineEmits(['on-input-updated', 'on-file-change'])




const submitHandler = async() => {
    switch(props.context) {
        case 'edit-user':
            console.log('[CustomModal / SubmitHandler] edit-user', formFieldValues)
              
            if(hasSelectedFile.value == true && formFieldValues.file) {
                console.log('File selected -> Multipart-Form Data')
                await toMultipart(formFieldValues, 'user', 'PUT')
            } else {
                console.log('No File Selected -> JSON')
                 const { email, firstname, lastname, password, confirmedPassword } = formFieldValues as any
                if(email || firstname || lastname || password || confirmedPassword ) {
                    console.log('text field filled', formFieldValues)
                    await toJson(formFieldValues, 'user', 'PUT')
                }
            }
            break;
        default:
            break;
    }
  
}

function onChange(data: FileList | { value: string, name: string }) {
    if (data instanceof FileList ) {
        console.log('[CustomModal / onChange] received a File', data)
        const file = data[0]
        const { val, unit } = returnFileSize(file.size)
        if(unit == 'kb' || unit == 'b'){
            formFieldValues['file'] = file
            hasSelectedFile.value = true
        } else {
            showToast({
                summary: 'Unvalid File Type',
                detail: `The file you selected is too heavy ${val} ${unit}`,
                type: 'info'
            })
        }

    } else {
        console.log('[CustomModal / onChange] received an Input Value', data)
        
        formFieldValues[data.name] = data.value
   
    }
}



</script>