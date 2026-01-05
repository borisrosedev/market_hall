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
      <div class="my-3">
        <p class="text-center fs-6">
          Already have an account? Login <RouterLink to="/login">here</RouterLink>
        </p>
      </div>
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
import userService from "../services/user-service";

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

function onFormUpdated(
  { name, value }: { name: keyof typeof fieldsValues; value: string }
) {
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

function onNoEqualPasswords() {
  console.log(fieldsValues.password, fieldsValues.confirmedPassword);
  const mess = messages.value.find(
    (mess: CustomMessageInterface) => mess.content == "Passwords are not equal"
  );
  if (!mess) {
    messages.value.push({
      classNames: "text-danger signup__message",
      content: "Passwords are not equal",
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

  const {firstname, lastname, email, password } = fieldsValues
  const { message } = await userService.signup({ firstname, lastname, email, password })
  messages.value = [];
  if(message == "user created"){
    onReset();
      messages.value.push({
        content: "Signup successful - Redirecting to login page in 3 seconds",
        classNames: "text-success signup__message",
      });
      setTimeout(() => {
        router.push("/login");
      }, 3000);

  } else {
       messages.value.push({
        content: "Signup fail - Retry",
        classNames: "text-danger signup__message",
      });

  }


 
}

async function onSubmit() {
  messages.value = [];
  showButtons.value = false;

  if (
    !fieldsValues.firstname &&
    !fieldsValues.lastname &&
    !fieldsValues.password &&
    !fieldsValues.email &&
    !fieldsValues.confirmedPassword
  ) {
    onNoInputs();
  }

  if (!fieldsValues.email) {
    onNoEmail();
  }

  if (!fieldsValues.firstname) {
    onNoFirstname();
  }

  if (!fieldsValues.password || !fieldsValues.confirmedPassword) {
    onNoPassword();
  }
  if (fieldsValues.password != fieldsValues.confirmedPassword) {
    onNoEqualPasswords();
  }

  if (
    fieldsValues.firstname &&
    fieldsValues.lastname &&
    fieldsValues.email &&
    fieldsValues.password &&
    fieldsValues.confirmedPassword &&
    fieldsValues.password == fieldsValues.confirmedPassword
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
  background-color: rgba(139, 69, 19, 0.3);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
}

.signup__message {
  font-size: 14px;
}
</style>
