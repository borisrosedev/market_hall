<template>
    <main class="app__main login__main">
        <section class="row justify-content-center w-100">

            <form class="col-12 col-xl-3 col-md-6 col-sm-8" @submit.prevent="onSubmit" @reset="onReset">
                <section>
                    <FormTextField @on-input-updated="onFieldUpdated" v-for="(field,i) in formTextFields" :key="i" :obj="field"/>
                </section>
                <section>
                    <button type="submit" class="btn btn-primary me-2">Submit</button>
                    <button type="reset" class="btn btn-outline-danger">Reset</button>
                </section>
                <section class="my-3" style="height: 10px;">
                    <p v-if="message" style="font-size: 14px" class="font-monospace text-danger animate__animated animate__fadeInUp" >{{ message }}</p>
                </section>
            </form>
          
        </section>
        <section class="my-3 row justify-content-center w-100">
            <p class="col-12 col-xl-3 col-md-6 col-sm-8 fs-6">No account ? Sign up <RouterLink to="/register">here</RouterLink></p>

        </section>
      
    </main>

</template>
<script setup lang="ts">
import FormTextField from '../components/FormTextField.vue';
import FormTextFieldInterface from '../interfaces/FormTextFieldInterface';
import { reactive, ref } from "vue";

const message = ref("")

const formTextFields = [
    {
        id: "email",
        type: "email",
        labelContent: "Email",
        heldId: "emailHelp",
        helpContent: "Ex: john@doe.com"
    },
    {
        id: "password",
        type: "password",
        labelContent: "Password",
        heldId: "passwordHelp",
        helpContent: "Your password should have at least 12 characters, one symbol, one number ..."
    }
] as FormTextFieldInterface[];

const fieldsValues = reactive({})

const onFieldUpdated = ({ value, name }) => {
    fieldsValues[name] = value
}

const onReset = (e) => {
    message.value = ""
}
const onSubmit = (e) => {
    if(! (fieldsValues.email && fieldsValues.password) ) {
        message.value = "Fill in the form";
        return 
    }
    e.target.reset()
    console.log(fieldsValues)
}

</script>
<style lang="css">
.login__main {
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

</style>