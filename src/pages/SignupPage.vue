<template>
  <main class="app__main signup__main">
    <section class="row justify-content-center w-100">
      <CustomForm
        @on-field-updated="onFormUpdated"
        :fields="fields"
        :messages="messages"
        :buttons="buttons"
        :onSubmit="onSubmit"
        :onReset="onReset"
        :show-buttons="showButtons"
      />
    </section>
  </main>
</template>
<script setup lang="ts">
import CustomForm from "../components/shared-components/CustomForm.vue";
import type { FormTextFieldInterface } from "../interfaces/form-interfaces/FomTextFieldInterface";
import { type Reactive, reactive, ref } from "vue";
import type { CustomMessageInterface } from "../interfaces/shared-interfaces/CustomMessageInterface";
import type { CustomButtonInterface } from "../interfaces/shared-interfaces/CustomButtonInterface";
import checkFormat from "../utils/check-format";
import { useUserAuth } from "../composables/useUserAuth";
import { useRouter } from "vue-router";

//--------------------------COMPOSABLES------------------

const router = useRouter();

//-----------------------CLASSIC OBJECTS---------------------------
const { id, buttons, fields } = {
  id: "signup-form",

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

//-------------------------REACTIVE OBJECTS-----------------------------
const messages = ref<CustomMessageInterface[]>([]);
const showButtons = ref<boolean>(true);
const fieldsValues = reactive<{
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  confirmedPassword?: string;
}>({});

//-------------------------- HANDLERS --------------------------------------

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

function onNoPassword() {
  const mess = messages.value.find(
    (mess: CustomMessageInterface) => mess.content == "You forgot the password"
  );
  if (!mess) {
    messages.value.push({
      classNames: "text-danger signup__message",
      content: "You forgot the password",
    });
  }
}

function onNoEmail() {
  const mess = messages.value.find(
    (mess: CustomMessageInterface) => mess.content == "You forgot the email"
  );
  if (!mess) {
    messages.value.push({
      classNames: "text-danger signup__message",
      content: "You forgot the email",
    });
  }
}

function onNoFirstname() {
  messages.value = messages.value.filter(
    (mess: CustomMessageInterface) =>
      mess.content !== "You forgot the firstname"
  );
  const mess = messages.value.find(
    (mess: CustomMessageInterface) => mess.content == "You forgot the firstname"
  );
  if (!mess) {
    messages.value.push({
      classNames: "text-danger signup__message",
      content: "You forgot the firstname",
    });
  }
  showButtons.value = true;
  return;
}

function onNoInputs() {
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
      classNames: "text-danger signup__message",
      content: "Fill in the form",
    });
  }
  showButtons.value = true;
  return;
}

async function onCompleteForm(
  fieldsValues: Reactive<{
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    confirmedPassword?: string;
  }>
) {
  showButtons.value = false;
  messages.value = [];
  //const { loginUser } = useUserAuth();

  onReset();
  messages.value.push({
    content: "Signup successful - Redirecting to login page in 3 seconds",
    classNames: "text-success signup__message",
  });
  setTimeout(() => {
    router.push("/login");
  }, 3000);
}

async function onSubmit() {
  showButtons.value = false;

  if (!fieldsValues.email) {
    onNoInputs();
  }

  if (!fieldsValues.email) {
    onNoEmail();
  }

  if (!fieldsValues.firstname) {
    onNoFirstname();
  }
  /*
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
  if (!checkFormat.isValidName(fieldsValues.firstname)) {
    messages.value.push({
      content: "Firstname must be at least 8 characters long",
      classNames: "text-danger signup__message",
    });
  }*/
  if (
    fieldsValues.email &&
    fieldsValues.password &&
    fieldsValues.firstname &&
    fieldsValues.lastname
  ) {
    onCompleteForm(
      fieldsValues as Reactive<{
        firstname?: string;
        lastname?: string;
        email?: string;
        password?: string;
        confirmedPassword?: string;
      }>
    );
  } else {
    window.scrollBy(0, window.innerHeight);
    messages.value.push({
      content: "Invalid form - Please check your inputs",
      classNames: "text-danger signup__invalid-message",
    });
  }

  showButtons.value = true;
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
