<template>
  <main class="app__main signup__main">
    <section class="row justify-content-center w-100">
      <CustomForm
        @on-field-updated="onFormUpdated"
        :fields="form.fields"
        :messages="messages"
        :buttons="form.buttons"
        :onSubmit="onSubmit"
        :onReset="onReset"
      />
    </section>
  </main>
</template>
<script setup lang="ts">
import CustomForm from "../components/shared-components/CustomForm.vue";
import type { FormTextFieldInterface } from "../interfaces/form-interfaces/FomTextFieldInterface";
import { reactive, ref } from "vue";
import type { CustomMessageInterface } from "../interfaces/shared-interfaces/CustomMessageInterface";
import type { CustomButtonInterface } from "../interfaces/shared-interfaces/CustomButtonInterface";
import checkFormat from "../utils/check-format";

const messages = ref<CustomMessageInterface[]>([]);

const form = {
  buttons: [
    {
      content: "Submit",
      type: "submit",
      classNames: "btn-primary me-3",
    },
    {
      content: "Reset",
      type: "reset",
      classNames: "btn-outline-danger",
    },
  ] as CustomButtonInterface[],
  fields: [
    {
      id: "firstname",
      labelContent: "Firstname",
      helpId: "firstnameId",
      helpContent: "Ex: thomas",
    },
    {
      id: "lastname",
      labelContent: "Lastname",
      helpId: "lastnameId",
      helpContent: "Ex: dupont",
    },
    {
      id: "email",
      type: "email",
      labelContent: "Email",
      helpId: "emailHelp",
      helpContent: "Ex: john@doe.com",
    },
    {
      id: "password",
      type: "password",
      labelContent: "Password",
      helpId: "passwordHelp",
      helpContent:
        "Your password should have at least 12 characters, one symbol, one number ...",
    },
    {
      id: "confirmedPassword",
      type: "password",
      labelContent: "Confirm Password",
      classNames: "mb-5",
    },
  ] as FormTextFieldInterface[],
};

const fieldsValues = reactive<{
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  confirmedPassword?: string;
}>({});

function onFormUpdated({ name, value }) {
  fieldsValues[name] = value;
}

function onReset() {
  fieldsValues.confirmedPassword = "";
  fieldsValues.email = "";
  fieldsValues.lastname = "";
  fieldsValues.firstname = "";
  fieldsValues.password = "";
  messages.value = [];
  console.log(fieldsValues);
}

function onSubmit() {
  messages.value = [];
  if (!fieldsValues.firstname) {
    window.scrollBy(0, window.innerHeight);
    messages.value.push({
      content: "Firstname missing",
      classNames: "text-danger signup__message",
    });
  }

  if (!fieldsValues.lastname) {
    messages.value.push({
      content: "Lastname missing",
      classNames: "text-danger signup__message",
    });
  }

  if (!fieldsValues.email) {
    messages.value.push({
      content: "Email missing",
      classNames: "text-danger signup__message",
    });
  }
  if (!fieldsValues.password) {
    messages.value.push({
      content: "Password missing",
      classNames: "text-danger signup__message",
    });
  }
  if (!checkFormat.isValidEmail(fieldsValues.email)) {
    messages.value.push({
      content: "Email is not valid",
      classNames: "text-danger signup__message",
    });
  }
  if (!checkFormat.isValidPassword(fieldsValues.password)) {
    messages.value.push({
      content: "Password is not valid",
      classNames: "text-danger signup__message",
    });
  }
  console.log(fieldsValues);
}
</script>

<style lang="css">
.signup__main {
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
}

.signup__message {
  font-size: 14px;
}
</style>
