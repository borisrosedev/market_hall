<template>
    <section class="d-flex flex-column p-2">
        <h2>Address</h2>
        <form class="row g-3">
            <FormTextFieldWithValidation 
                v-for="(textField, i) in form.textFields" 
                :key="i" 
                :data="textField"
                :icon="textField.icon"
                @input-change="onFieldChange"

            />
            <div class="col-12 my-3">
                <button class="btn btn-outline-danger" type="reset">Cancel</button>
                <button class="btn btn-outline-warning mx-2" type="submit">Next</button>
            </div>
        </form>

    </section>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import FormTextFieldWithValidation from '../../../components/form-components/FormTextFieldWithValidation.vue';
import checkFormat from '../../../utils/check-format';
import { useOrderService } from "../../../composables/useOrderService"


const { setOrderProgress } = useOrderService()

const formFieldValues = reactive({}) as any

const form = reactive({
    textFields: [
        {
            icon: '🪪',
            id: 'firstname',
            labelContent: 'Firstname',
            isValid: undefined,
            isInvalid: undefined
        },
        {
            icon: '🪪',
            id: 'lastname',
            labelContent: 'Lastname',
            isValid: undefined,
            isInvalid: undefined
        },
        {
            icon: '🏙️',
            id: 'country',
            labelContent: 'Country',
            isValid: undefined,
            isInvalid: undefined
        },
        {
            icon: '🏙️',
            id: 'city',
            labelContent: 'City',
            isValid: undefined,
            isInvalid: undefined
        },
        {
            icon: '✉️',
            id: 'address',
            labelContent: 'Address',
            isValid: undefined,
            isInvalid: undefined
        },
        {
            icon: '📭',
            id: 'zip',
            labelContent: 'Zip',
            isValid: undefined,
            isInvalid: undefined
        }
    ]
})

const onFieldChange = ({ name, value }) => {

    const el = form['textFields'].find((el) => el.id == name) as any
    let isValid: boolean | undefined;
    switch(name){
 
        case 'email': 
           isValid = checkFormat.isValidEmail(value);
            break;
        case 'password':
            isValid = checkFormat.isValidPassword(value);
            break;
        case 'zip':  
            isValid = checkFormat.isValidZipCode(value);
            break;
        case 'address':
            isValid = checkFormat.isValidAdresses(value);
            break;
        case 'country':
        case 'city':
        case 'lastname':
        case 'firstname':
            isValid = checkFormat.isValidName(value);
            break;
        default:
            break;
    }


    // Améliorer la logique de la progress bar 
    el.isValid = isValid
    if (!isValid) {
        setOrderProgress(-10)
        el.isInvalid = true
    } else {

        if(formFieldValues[name]?.length > value.length){
            setOrderProgress(-1)
        } else {
            setOrderProgress(1)
        }
        formFieldValues[name] = value

        el.isInvalid = false
    }

}

</script>