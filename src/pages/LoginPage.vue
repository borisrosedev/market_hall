<template>
  <main class="app__main login__main">
    <section class="row justify-content-center w-100">
      <CustomForm
        :id="id"
        @on-field-updated="onFieldUpdated"
        :fields="fields"
        :buttons="buttons"
        :messages="messages"
        :onReset="onReset"
        :onSubmit="onSubmit"
      />
    </section>
    <section class="my-3 row justify-content-center w-100">
      <p class="col-12 col-xl-3 col-md-6 col-sm-8 fs-6">
        No account ? Sign up <RouterLink to="/register">here</RouterLink>
      </p>
    </section>
  </main>
</template>
<script setup lang="ts">
import CustomForm from "../components/shared/CustomForm.vue";
import type { FormTextFieldInterface } from "../interfaces/form-interfaces/FomTextFieldInterface";
import { reactive, ref } from "vue";
import type { CustomButtonInterface } from "../interfaces/shared-interfaces/CustomButtonInterface";
import type { CustomMessageInterface } from "../interfaces/shared-interfaces/CustomMessageInterface";

const messages = ref<CustomMessageInterface[]>([]);

const { id, buttons, fields } = {
  id: "login-form",
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
      id: "email",
      type: "email",
      labelContent: "Email",
      heldId: "emailHelp",
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
  ] as FormTextFieldInterface[],
};

const fieldsValues = reactive({}) as { email?: string; password?: string };

const onFieldUpdated = ({ value, name }) => {
  fieldsValues[name] = value;
};

function onReset() {
  fieldsValues.email = "";
  fieldsValues.password = "";
  messages.value = [];
}

function onSubmit() {
  if (!fieldsValues.email && !fieldsValues.password) {
    messages.value = messages.value.filter(
      (mess: CustomMessageInterface) =>
        mess.content !== "You forgot the email" &&
        mess.content !== "Your forget the password"
    );
    const mess = messages.value.find(
      (mess: CustomMessageInterface) => mess.content == "Fill in the form"
    );
    if (!mess) {
      messages.value.push({
        classNames: "text-danger login__message",
        content: "Fill in the form",
      });
    }
    return;
  }

  if (!fieldsValues.email) {
    const mess = messages.value.find(
      (mess: CustomMessageInterface) => mess.content == "You forgot the email"
    );
    if (!mess) {
      messages.value.push({
        classNames: "text-danger login__message",
        content: "You forgot the email",
      });
    }
  }

  if (!fieldsValues.password) {
    const mess = messages.value.find(
      (mess: CustomMessageInterface) =>
        mess.content == "You forgot the password"
    );
    if (!mess) {
      messages.value.push({
        classNames: "text-danger login__message",
        content: "You forgot the password",
      });
    }
  }

  if (!fieldsValues.password && fieldsValues.email) {
    messages.value = messages.value.filter(
      (mess: CustomMessageInterface) =>
        mess.content !== "You forgot the email" &&
        mess.content !== "Fill in the form"
    );
  }

  if (fieldsValues.password && !fieldsValues.email) {
    messages.value = messages.value.filter(
      (mess: CustomMessageInterface) =>
        mess.content !== "You forgot the password" &&
        mess.content !== "Fill in the form"
    );
  }

  if (fieldsValues.email && fieldsValues.password) {
    messages.value = [];
  }
}
</script>
<style lang="css">
.login__main {
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.login__message {
  font-size: 14px;
}
</style>
